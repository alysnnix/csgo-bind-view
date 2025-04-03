let splitedBind = [];
let loading = true;

function decodeContent(content) {
	const decoder = new TextDecoder('utf-8');
	const uint8Array = new Uint8Array([...window.atob(content)].map((char) => char.charCodeAt(0)));
	return decoder.decode(uint8Array);
}

async function handleGetBinds() {
	const user = 'alysnnix';
	const repo = 'csgo-bind-view';
	const filePath = 'binds.txt';
	const url = `https://api.github.com/repos/${user}/${repo}/contents/${filePath}?ref=base`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Erro ao obter o arquivo: ${response.status} - ${response.statusText}`);
		}

		const file = await response.json();

		const contentBase64 = file.content;
		const content = decodeContent(contentBase64);
		splitedBind = content.split('---');
	} catch (error) {
		console.error(error);
	} finally {
		loading = false;
	}
}

const createDetails = () => {
	const splitBindMap = splitedBind.map((item, index) => {
		const [title, content] = item.split('||');
		const validateBreakLine = content?.includes('<br />') ? '<br>' : '';
		const validateHaveIqual = content?.includes('=') ? '=' : '';
		
		if (validateHaveIqual) {
			const splitContent = content.split('<br />');
			const structure = splitContent.map((item) => {
				const [before, after] = item.split('=');
				return `
          <div class="bind-with-title-content">
            <strong>${before}</strong>
            <p>${after}</p>
          </div>
        `;
			});
			return template(structure.join(''));
		}

		if (validateBreakLine) {
			const splitContent = content.split('<br />');
			const structure = splitContent.map((item) => {
				return `<p>${item}</p>`;
			});

			return template(structure.join(''));
		}

		let view = '';

		function template(content) {
			const [key, description] = title.split('-')
			return `
				<details>
					<summary class="bind-title">
						<strong class="key">${key}</strong>
						${description || ''}
						<button onclick="copyToClipboard('txt-${index}')">copiar</button>
					</summary>
					${content}
				</details>
			`;
		}

		// se o conteúdo tiver quebra de linha exiba em <p> diferentes
		if (validateBreakLine) {
			const splitContent = content.split('<br />');
			const structure = splitContent.map((item, index) => {
				return `<p>${item}</p>`;
			});
			return template(structure.join(''));
		}

		view = ` <p id="txt-${index}">${content} ${validateBreakLine}</p> `;

		const structure = template(view);
		return structure;
	});

	const removeLastElement = splitBindMap.splice(0, splitBindMap.length - 1);
	return `${removeLastElement.join('')}`;
};

async function main() {
	await handleGetBinds();
	if (loading) {
		document.body.insertAdjacentHTML('beforeend', '<h1>Carregando...</h1>');
	} else {
		document.body.insertAdjacentHTML('beforeend', createDetails());
	}
}

main();
