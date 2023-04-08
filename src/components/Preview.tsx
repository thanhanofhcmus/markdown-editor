import 'highlight.js/styles/nord.css';
import { marked } from 'marked';

import Renderer from '../marked-extensions/Renderer';
import { resetHeadingCounter, parseHeading } from '../marked-extensions/TableOfContentGenerator';
import { Emoji, EqualHighlight, Command } from '../marked-extensions/Tokenizer';

marked.setOptions({
  langPrefix: 'hljs code-block language-',
  smartLists: true,
  smartypants: true,
  renderer: new Renderer(),
});

marked.use({ extensions: [Command, Emoji, EqualHighlight] });

export default function Preview({ value }: { value: string }) {
  resetHeadingCounter();
  parseHeading(value);
  resetHeadingCounter();
  const html = marked.parse(value);
  return (
    <div className="flex justify-center overflow-x-auto bg-bg-light-secondary dark:bg-bg-dark-secondary">
      <div
        className="h-[95vh] px-3 py-1 w-full max-w-4xl
			bg-bg-light-secondary text-fg-light-secondary
			dark:text-fg-dark-secondary dark:bg-bg-dark-secondary
			markdown-preview unreset"
		 // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
