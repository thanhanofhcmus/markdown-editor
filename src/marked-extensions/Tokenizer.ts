import { marked } from "marked";
import { unicode as mappedUnicode } from './emojis'

export const Emoji: marked.TokenizerExtension & marked.RendererExtension = {
  name: 'emoji',
  level: 'inline',
  start(src) {
    const match = src.match(/:.*:/);
    return match ? (match.index ? match.index : -1) : -1;
  },
  tokenizer(src) {
    const rule = /^:[\d\w]+:/; //don't forget to match from start of line with '^'
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'emoji',
        raw: match[0],
      };
    }
  },
  renderer(token) {
    const name = token.raw.substring(1, token.raw.length - 1);
    const unicode = mappedUnicode[name];
    return unicode ? `&#x${unicode};` : token.raw;
  }
};