let splitedBind = [];

async function handleGetBinds() {
	const res = await fetch('./binds.txt');
	const content = await res.text();
	splitedBind = content.split('---');
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
	document.body.insertAdjacentHTML('beforeend', createDetails());
}

main();
