import Editor from '@monaco-editor/react';
import React from 'react';

import type { SetStateType } from '../types';

interface Props {
  text?: string;
  setText: SetStateType<string>
}

export default function TextEditor({ text, setText }: Props) {
  const handleEditorChange = (value: string | undefined) => {
    setText((prevState) => value || prevState);
  };

  return (
    <Editor
      options={{ minimap: { enabled: false } }}
      onChange={handleEditorChange}
      height="90vh"
      defaultLanguage="markdown"
      value={text}
    />
  );
}
