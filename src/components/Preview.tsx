import { marked } from "marked";
interface Props {
	value: string
}

export const Preview = ({ value }: Props) => {
	const html = marked.parse(value);
	return (
		<div className="h-[95vh] overflow-auto px-3 py-1
		bg-bg-light-secondary text-fg-light-secondary
		dark:text-fg-dark-secondary dark:bg-bg-dark-secondary
		unreset
		"
		dangerouslySetInnerHTML={{__html: html}}
		>
			{/* {html} */}
		</div>
	);
};