import hljs from 'highlight.js';
import { marked } from 'marked';

import { makeHeadingID } from './TableOfContentGenerator';

const COPY_ICON = '<div class="absolute top-2 right-3 hover:scale-110""><svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 16 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></svg></div>';

type Escapes = '&' | '<' | '>' | '"' | "'";
type IEscapeMapped = {
  [key in Escapes]: string;
};

const escapeTest = /["&'<>]/;
const escapeReplace = /["&'<>]/g;
const escapeTestNoEncode = /["'<>]|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /["'<>]|&(?!#?\w+;)/g;
const escapeReplacements: IEscapeMapped = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const getEscapeReplacement = (ch: string) => escapeReplacements[ch as Escapes];

const escape = (html: string, encode: boolean) => {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else if (escapeTestNoEncode.test(html)) {
    return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
  }

  return html;
};

class Renderer extends marked.Renderer {
  static heading(
    this: marked.RendererThis, text: string, level: 1 | 2 | 3 | 4 | 5 | 6, _raw: string, _slugger: marked.Slugger,
  ): string {
    return `<h${level} id="${makeHeadingID(level, text)}">${text}</h${level}>`;
  }

  codespan(this: marked.Renderer | marked.RendererThis, code: string): string {
    return `<code class="hljs">${code}</code>`;
  }

  code(
    this: marked.Renderer | marked.RendererThis, code: string, language: string | undefined, isEscaped: boolean,
  ): string {
    const lang = ((language || '').match(/\S*/) || [])[0];
    const languageSubset = lang === undefined ? lang : [lang];
    const out = hljs.highlightAuto(code, languageSubset).value;
    if (out != null && out !== code) {
      isEscaped = true;
      code = out;
    }

    code = `${code.replace(/\n$/, '')}\n`;
    return `<pre><code class="whitespace-pre-wrap relative hljs code-block language-${lang ? escape(lang, true) : 'none'}">${
			 isEscaped ? code : escape(code, true)
			 }${COPY_ICON
			 }</code></pre>\n`;
  }
}

export default Renderer;
