import React, { useState } from "react";
import Homebox from "../components/Homebox";

const Binarytodecimal = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  let res = "";

  const runLogic = (input) => {
    if (input === 0) {
      return setResult(res.split("").reverse().join(""));
    }
    res = `${res}${parseInt(input) % 2}`;
    runLogic(Math.trunc(input / 2));
  };

  return (
    <Homebox
      input={input}
      setInput={setInput}
      result={result}
      title='3. Decimal to binary'
      label='Number'
      runLogic={runLogic}
      setResult={setResult}
    />
  );
};

export default Binarytodecimal;
