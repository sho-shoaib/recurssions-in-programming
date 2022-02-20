import React, { useState } from "react";
import Homebox from "../components/Homebox";

const Pallindrome = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const runLogic = () => {
    if (input === input.split("").reverse().join("")) {
      return setResult("True");
    }
    setResult("False");
  };

  return (
    <Homebox
      input={input}
      setInput={setInput}
      result={result}
      title='2. Pallindrome'
      label='String'
      runLogic={runLogic}
      setResult={setResult}
    />
  );
};

export default Pallindrome;
