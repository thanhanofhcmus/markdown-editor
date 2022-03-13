interface IHeadingData {
	level: number;
	text: string;
	id: string;
}

interface ITableOfContent {
	headings: IHeadingData[];
};

export interface IHeadingOption {
	exclude?: boolean;
	fontWeight?: string;
	fontStyle?: string;
	decorationStyle?: string;
	decorationLine?: string;
	color?: string;
};

export interface ITableOfContentOptions {
	style: { [key: string]: string | number };
	options: IHeadingOption[];
}

const TOBData: ITableOfContent = {
	headings: [],
};

const processModifier = (option: IHeadingOption, modi: string) => {
	switch (modi) {
		case "exclude":
			option.exclude = true; break;
		case "none":
		case "underline":
		case "overline":
		case "line-through":
			option.decorationLine = modi; break
		case "solid":
		case "double":
		case "dotted":
		case "dashed":
		case "wavy":
			option.decorationStyle = modi; break;
		case "normal":
		case "italic":
		case "oblique":
			option.fontStyle = modi; break;
		case "thin":
			option.fontWeight = "100"; break;
		case "extralight":
			option.fontWeight = "200"; break;
		case "light":
			option.fontWeight = "300"; break;
		case "medium":
			option.fontWeight = "500"; break;
		case "semibold":
			option.fontWeight = "600"; break;
		case "bold":
			option.fontWeight = "700"; break;
		case "extrabold":
			option.fontWeight = "800"; break;
		case "black":
			option.fontWeight = "900"; break;
	}
}

const processOptions = (options: string[]): ITableOfContentOptions => {
	const ops = { options: [{}, {}, {}, {}, {}, {}, {}], style: {} }
	for (const [, option] of options.entries()) {
		try {
			const match = option.match(/^h([1-6])_([\w\d-]+)/);
			if (!match) {
				continue;
			}
			const level = parseInt(match[1]);
			const modi = match[2];
			processModifier(ops.options[level], modi);
		} catch (e) {
			continue;
		}

	}
	return ops;
}

const parseHeadingData = (src: string): IHeadingData | undefined => {
	const match = src.match(/^(#{1,6}) (.*)/);
	if (!match) {
		return;
	}
	return { id: match[2], text: match[2], level: match[1].length };
}

export const parseHeading = (src: string): void => {
	const iter = src.matchAll(/^#{1,6} .*/gm);
	const headings: IHeadingData[] = []
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

const makeHTMLLink = ({ id, level, text }: IHeadingData, option: IHeadingOption) => {
	let styles = `font-weight: ${(9 - level) * 100};`;
	if (option.exclude) {
		return "\n";
	}
	if (option.fontWeight) {
		styles += `font-weight: ${option.fontWeight}; `;
	}
	if (option.fontStyle) {
		styles += `font-style: ${option.fontStyle}; `;
	}
	if (option.decorationLine) {
		styles += `text-decoration-line: ${option.decorationLine}; `;
	}
	if (option.decorationStyle) {
		styles += `text-decoration-style: ${option.decorationStyle}; `;
	}

	return `<p style="margin: 0px; padding: 0px;" class="for-h${level}"><a href="#${id}" style="margin-left: ${level * 0.5}rem; ${styles}">${text}</a></p>\n`;
}

export const generateTableOfContent = (options: string[]) => {
	let html = "";
	const ops = processOptions(options);
	for (const [, heading] of TOBData.headings.entries()) {
		html += makeHTMLLink(heading, ops.options[heading.level]);
	}
	html = `<div>${html}</div>`;
	return html;
}