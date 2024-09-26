/* eslint-disable react/prop-types */
import { useState } from "react";

const Input = ({ onSubmit }) => {
  const [inputBox, setInputBox] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputBox);
    setInputBox("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        height: "max-content",
        margin: "10px",
      }}
    >
      <input
        type="text"
        value={inputBox}
        onChange={(e) => setInputBox(e.target.value)}
      />
      <button style={{ background: "darkgrey" }}>Generate</button>
    </form>
  );
};

export default Input;
