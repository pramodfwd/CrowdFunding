import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({ setValue, value }: any) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={value}
      onBlur={(content) => setValue(content)}
    />
  );
};

export default RichTextEditor;
