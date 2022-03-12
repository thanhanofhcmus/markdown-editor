import 'highlight.js/styles/nord.css';
import { marked } from "marked";
import { Renderer } from "../marked-extensions/Renderer";
import { Emoji, EqualHighlight } from "../marked-extensions/Tokenizer";

marked.setOptions({
	langPrefix: "hljs code-block language-",
	smartLists: true,
	smartypants: true,
	renderer: new Renderer(),
});

marked.use({ extensions: [Emoji, EqualHighlight]});

interface Props {
	value: string
}

export const Preview = ({ value }: Props) => {
	const html = marked.parse(value);
	return (
		<div className="h-[95vh] overflow-x-auto px-3 py-1
		bg-bg-light-secondary text-fg-light-secondary
		dark:text-fg-dark-secondary dark:bg-bg-dark-secondary
		markdown-preview unreset"
			dangerouslySetInnerHTML={{ __html: html }}
		>
			{/* {html} */}
		</div>
	);
};