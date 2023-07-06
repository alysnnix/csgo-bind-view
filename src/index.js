let splitedBind = [];
let loading = true;

function decodeContent(content) {
  const decoder = new TextDecoder('utf-8');
  const uint8Array = new Uint8Array([...window.atob(content)].map(char => char.charCodeAt(0)));
  return decoder.decode(uint8Array);
}

async function handleGetBinds() {
	const user = '4lysson-a';
	const repo = 'csgo-bind-view';
	const filePath = 'binds.txt';
	const url = `https://api.github.com/repos/${user}/${repo}/contents/${filePath}`;

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

		const structure = `
			<details>
				<summary class="bind-title">
					${title}
				<button onclick="copyToClipboard('txt-${index}')">copiar</button>
				</summary>
				<p id="txt-${index}">
					${content}
					${validateBreakLine}
				</p>
			</details>
		`;
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
