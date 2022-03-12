import { marked } from "marked";
import { unicode as mappedUnicode } from './emojis'

type MarkedExtension = marked.TokenizerExtension & marked.RendererExtension;

export const Emoji: MarkedExtension = {
  name: 'emoji',
  level: 'inline',
  start(src) {
    const match = src.match(/:.*:/);
    return match ? (match.index ? match.index : -1) : -1;
  },
  tokenizer(src) {
    const match = src.match(/(^:U\+[\d\w]+:)|(^:[\d\w]+:)/); //don't forget to match from start of line with '^'
    if (match) {
      return {
        type: 'emoji',
        raw: match[1] ? match[1] : match[2],
        isUnicode: match[1] !== undefined
      };
    }
  },
  renderer(token) {
    const name = token.raw.trim();
    const unicode = token.isUnicode ? name.slice(3, -1) : mappedUnicode[name.slice(1, -1)];
    return unicode ? `&#x${unicode};` : token.raw;
  }
};

export const EqualHighlight: MarkedExtension = {
  name: 'equal-highlight',
  level: 'inline',
   start(src) {
    const match = src.match(/==[^=]/);
    return match ? (match.index ? match.index : -1) : -1;
  }, tokenizer(src) {
    const match = src.match(/^==([^=]+)==/);
    if (match) {
      return {
        type: 'equal-highlight',
        raw: match[0],
        inlineTokens: this.lexer.inlineTokens(match[1], [])
      }
    }
  },
  renderer(token) {
    const tokens = token.inlineTokens;
    return `<span class="text-fg-light bg-bg-light dark:text-fg-dark dark:bg-bg-dark
    rounded-md px-1 py-1 m-0 text-base shadow-md drop-shadow-sm">${this.parser.parseInline(tokens, new marked.Renderer())}</span>`;
  }
}