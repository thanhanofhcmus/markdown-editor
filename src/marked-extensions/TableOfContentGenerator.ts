interface HeadingData {
	level: number;
	text: string;
	id: string;
}

interface ITableOfContent {
	headings: HeadingData[];
	style: Object;
};

const resetHeadingData = (): HeadingData[] => [];

const TOBData: ITableOfContent = {
	headings: resetHeadingData(),
	style: {}
};

const parseHeadingData = (src: string): HeadingData | undefined => {
	const match = src.match(/^(#{1,6}) (.*)/);
	if (!match) {
		return;
	}
	return { id: match[2], text: match[2], level: match[1].length };
}

export const parseHeading = (src: string): void => {
	const iter = src.matchAll(/^#{1,6} .*/gm);
	const headings: HeadingData[] = []
	let next = iter.next();
	while (!next.done) {
		const item = parseHeadingData(next.value[0])
		if (!item) {
			break;
		}
		if (!headings.some(h => h.id === item.id)) {
			headings.push(item);
		}
		next = iter.next();
	}
	TOBData.headings = headings;
}

const makeHTMLLink = ({ id, level, text }: HeadingData) =>
	`<p><a href="#${id}" style="margin-left: ${level * 0.5}rem;">${text}</a></p>\n`;

export const generateTableOfContent = () => {
	let html = "";
	for (const [, heading] of TOBData.headings.entries()) {
		html += makeHTMLLink(heading);
	}
	html = `<p>${html}</p>`;
	return html;
}