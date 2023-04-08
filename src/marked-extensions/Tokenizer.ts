import { marked } from 'marked';

import { unicode as mappedUnicode } from './emojis';
import { generateTableOfContent } from './TableOfContentGenerator';

type MarkedExtension = marked.TokenizerExtension & marked.RendererExtension;
type TokenizerReturnType = marked.Tokens.Generic | void;

const getMatchIndex = (match: RegExpMatchArray | null) => {
  if (match?.index) {
    return match.index;
  }
  return -1;
};

export const Command: MarkedExtension = {
  name: 'command',
  level: 'inline',
  start(src) {
    return getMatchIndex(src.match(/::[^:]+::/));
  },

  tokenizer(src): TokenizerReturnType {
    const match = src.match(/^::([\w-]+)(:[\w#|-]+)?::/);
    if (match) {
      const command = match[1];
      const options: string[] = [];
      if (match[2]) {
        const iter = match[2].slice(1).matchAll(/[\w#-]+/g);
        for (const [item] of iter) {
          options.push(item);
        }
      }
      return { type: 'command', raw: match[0], command, options };
    }
    return undefined;
  },

  renderer(token) {
    if (token.command === 'table_of_content') {
      return generateTableOfContent(token.options);
    }
    return `{${token.command}}:{${token.options}}`;
  },
};

export const Emoji: MarkedExtension = {
  name: 'emoji',
  level: 'inline',
  start(src) {
    return getMatchIndex(src.match(/:[^:]+:/));
  },

  tokenizer(src): TokenizerReturnType {
    const match = src.match(/^:U\+(\w+):|^:(\w+):/); // don't forget to match from start of line with '^'
    if (match) {
      return {
        type: 'emoji',
        raw: match[0],
        text: match[1] || match[2],
        isUnicode: match[1] !== undefined,
      };
    }
    return undefined;
  },

  renderer(token) {
    const name = token.text;
    const unicode = token.isUnicode ? name : mappedUnicode[name];
    return unicode ? `&#x${unicode};` : token.raw;
  },
};

export const EqualHighlight: MarkedExtension = {
  name: 'equal-highlight',
  level: 'inline',
  start(src) {
    return getMatchIndex(src.match(/==[^=]/));
  },

  tokenizer(src): TokenizerReturnType {
    const match = src.match(/^==([^=]+)==/);
    if (match) {
      return {
        type: 'equal-highlight',
        raw: match[0],
        inlineTokens: this.lexer.inlineTokens(match[1], []),
      };
    }
    return undefined;
  },

  renderer(token) {
    const className = 'text-fg-light bg-bg-light dark:text-fg-dark dark:bg-bg-dark rounded-md px-1 py-1 m-0 shadow-md drop-shadow-sm';
    const tokens = token.inlineTokens;
    return `<span class="${className}">${this.parser.parseInline(tokens, new marked.Renderer())}</span>`;
  },
};
