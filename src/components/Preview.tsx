import 'highlight.js/styles/nord.css';
import { marked } from "marked";
import { Renderer } from "../marked-renderer";

marked.setOptions({
	langPrefix: "hljs code-block language-",
	smartLists: true,
	smartypants: true,
	renderer: new Renderer(),
});

interface Props {
	value: string
}

export const Preview = ({ value }: Props) => {

	return (
		<div className="h-[95vh] overflow-x-auto px-3 py-1
		bg-bg-light-secondary text-fg-light-secondary
		dark:text-fg-dark-secondary dark:bg-bg-dark-secondary
		markdown-preview unreset"
			dangerouslySetInnerHTML={{ __html: marked.parse(value) }}
		>
		</div>
	);
};