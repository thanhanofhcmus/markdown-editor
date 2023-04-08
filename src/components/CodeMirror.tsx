import * as React from "react";

interface Props {
  text?: string;
  setText: (text: string) => void
}

export const TextEditor = (_: Props) => {
  return (
      <div>Text Editor</div>
  )
};

