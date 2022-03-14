interface IHeadingData {
	level: number;
	text: string;
	id: string;
};

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

export interface IGlobalOptions extends IHeadingOption {
	indent?: number;
	noLink?: boolean;
};

export interface ITableOfContentOptions {
	global: IGlobalOptions;
	options: IHeadingOption[];
}

let headingCounter = 0; // to generate unique id for each heading

export const resetHeadingCounter = () => { headingCounter = 0; }

const TOBData: ITableOfContent = {
	headings: [],
};

const processHeadingModifier = (option: IHeadingOption, modi: string) => {
	if (modi.startsWith("color_")) {
		const color = modi.slice(6);
		if (CSS.supports('color', color)) {
			option.color = color;
		}
	}
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
		case "ordinary":
			option.fontWeight = "400"; break;
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

const processGlobalModifier = (option: IGlobalOptions, modi: string) => {
	if (modi.startsWith("indent_")) {
		option.indent = parseInt(modi.slice(7)) || 0;
	} else if (modi === "no_link") {
		option.noLink = true;
	} else {
		processHeadingModifier(option, modi);
	}
}

const processOptions = (options: string[]): ITableOfContentOptions => {
	const ops = { options: [{}, {}, {}, {}, {}, {}, {}], global: {} }
	for (const [, option] of options.entries()) {
		try {
			const match = option.match(/^h([1-6])_([\w\d#-]+)|^toc_([\w\d#-]+)/);
			if (!match) {
				continue;
			}
			if (match[3]) {
				processGlobalModifier(ops.global, match[3]);
			}
			const level = parseInt(match[1]);
			const modi = match[2];
			processHeadingModifier(ops.options[level], modi);
		} catch (e) {
			continue;
		}

	}
	return ops;
}

export const makeHeadingID = (level: number, text: string) => {
	headingCounter += 1;
	return `c:${headingCounter}-hd:${level}-title:${text}`;
}

const parseHeadingData = (src: string): IHeadingData | undefined => {
	const match = src.match(/^(#{1,6}) (.*)/);
	if (!match) {
		return;
	}
	const text = match[2];
	const level = match[1].length;
	return { id: makeHeadingID(level, text), text, level };
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
		headings.push(item);
		next = iter.next();
	}
	TOBData.headings = headings;
}

const makeHTMLLink = ({ id, level, text }: IHeadingData, option: IHeadingOption, globalOptions: IGlobalOptions) => {
	if (option.exclude) {
		return "\n";
	}

	const makeStyle = (key: string, value?: string, globalValue?: string): string => {
		if (value) {
			return `${key}: ${value};`;
		} else if (globalValue) {
			return `${key}: ${globalValue};`;
		}
		return "";
	}

	let styles = `font-weight: ${(9 - level) * 100};`;
	styles += makeStyle("color", option.color, globalOptions.color);
	styles += makeStyle("font-weight", option.fontWeight, globalOptions.fontWeight);
	styles += makeStyle("font-style", option.fontStyle, globalOptions.fontStyle);
	styles += makeStyle("text-decoration-line", option.decorationLine, globalOptions.decorationLine);
	styles += makeStyle("text-decoration-style", option.decorationStyle, globalOptions.decorationStyle);

	const marginLeft = `margin-left: ${(globalOptions.indent ? Math.min(10, Math.max(0, level + globalOptions.indent)) : level) * 0.5}rem; `;
	const halfOpenTag = globalOptions.noLink ? "<span " : `<a href="#${id}"`;
	const CloseTag = globalOptions.noLink ? "</span>" : "</a>";

	return `<p style="margin: 0px; padding: 0px;">${halfOpenTag} style="${marginLeft} ${styles}">${text}${CloseTag}</p>\n`;
}

export const generateTableOfContent = (options: string[]) => {
	let html = "";
	const ops = processOptions(options);
	for (const [, heading] of TOBData.headings.entries()) {
		html += makeHTMLLink(heading, ops.options[heading.level], ops.global);
	}
	html = `<div>${html}</div>`;
	return html;
}