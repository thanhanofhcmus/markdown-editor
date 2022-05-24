import * as React from "react";
import CodeMirror from '@uiw/react-codemirror';
import { basicSetup } from "@codemirror/basic-setup";
import { EditorView } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
import { vim } from "@replit/codemirror-vim";
import { oneDark } from "@codemirror/theme-one-dark"

interface Props {
  text?: string;
  setText: (text: string) => void
};

const extendedConfig = EditorView.theme({
  "&": { fontSize: "10pt" },
  ".cm-scroller": { overflow: "auto" },
  ".cm-content": { fontFamily: "SFMono Nerd Font, Monaco, Lucida Console, monospace", },
});

export const TextEditor = ({ text, setText }: Props) => {
  return (
    <CodeMirror
      value={text}
      height="95vh"
      theme={oneDark}
      extensions={[vim(), basicSetup, markdown(), extendedConfig]}
      onChange={value => { setText(value); }}
    />
  );
};
