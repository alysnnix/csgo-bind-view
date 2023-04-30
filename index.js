let splited = [];

async function handleGetBinds() {
	const res = await fetch('./binds.txt');
	const content = await res.text();
	splited = content.split('---');
}

const createDetails = () => {
	const splitMap = splited.map((item) => {
		const [title, content] = item.split('||');
		const validateBreakLine = content?.includes('<br />') ? '<br>' : '';

		const structure = `
			<details>
				<summary class="bind-title">
					${title}
				<button onclick="copyToClipboard('txt-${title}')">copiar</button>
				</summary>
				<p id="txt-${title}">
					${content}
					${validateBreakLine}
				</p>
			</details>
		`;

		return structure;
	});

	const removeLastNullItem = splitMap.splice(0, splitMap.length - 1);
	return `${removeLastNullItem.join('')}`;
};

async function main() {
	await handleGetBinds();
	document.body.insertAdjacentHTML('beforeend', createDetails());
}

main();
