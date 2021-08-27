import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    const fileSelected = event.target.files[0];
    const types = ["image/png", "image/jpeg"];
    console.log(fileSelected.type);
    if (fileSelected && types.includes(fileSelected.type)) {
      setFile(fileSelected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an imgae (png or jpeg)");
    }
  };

  return (
    <form>
        <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
        </label>
        <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
        </div>
    </form>
  );
};

export default UploadForm;
