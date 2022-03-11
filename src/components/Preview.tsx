import 'highlight.js/styles/nord.css';
import { marked } from "marked";
import { useEffect, createRef } from "react";
import hljs from "highlight.js"

marked.setOptions({
	langPrefix: "hljs language-",
	smartLists: true,
	smartypants: true,
	highlight: (code, lang) =>  hljs.highlightAuto(code, [lang]).value
});

interface Props {
	value: string
}

export const Preview = ({ value }: Props) => {
	const ref = createRef<HTMLDivElement>();

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const nodes = ref.current.querySelectorAll("code");
		for (let i = 0; i < nodes.length; ++i) {
			if (!nodes[i].classList.contains('hljs')) {
				nodes[i].classList.add("hljs");
			}
		}
	}, [ref]);
	
	return (
		<div className="h-[95vh] overflow-auto px-3 py-1
		bg-bg-light-secondary text-fg-light-secondary
		dark:text-fg-dark-secondary dark:bg-bg-dark-secondary
		unreset"
		dangerouslySetInnerHTML={{__html: marked.parse(value)}}
		ref={ref}
		>
		</div>
	);
};