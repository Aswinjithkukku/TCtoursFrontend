import React from "react";
import { useState } from "react";
import { useRef } from "react";

const FileUpload = ({ onSelected, onRemove }) => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);

  const set_File = ({ target }) => {
    const img = target.files[0];
    setFile(img);
    onSelected(img);
  };
  return (
    <div>
      <div>
        <input
          type="file"
          name="file"
          hidden
          className="file_input_ele"
          id="image_input"
          onChange={set_File}
        />
      </div>
    </div>
  );
};

export default FileUpload;
