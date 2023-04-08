import * as React from "react";

interface Props {
  text?: string;
  setText: (text: string) => void
}

export const TextEditor = ({ setText }: Props) => {
  setText("# This is a H1");

  return (
      <div>Text Editor</div>
  )
};

