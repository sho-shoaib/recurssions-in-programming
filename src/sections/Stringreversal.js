import React from "react";
import { useState } from "react";
import Homebox from "../components/Homebox";

const Stringreversal = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const runLogic = () => {
    setResult(input.split("").reverse().join(""));
  };

  return (
    <>
      <Homebox
        input={input}
        setInput={setInput}
        result={result}
        title='1. String reversal'
        label='String'
        runLogic={runLogic}
        setResult={setResult}
      />
    </>
  );
};

export default Stringreversal;
