import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(0);

  function numbersToWords(n){
    const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
      if (n < 20) return num[n];
      const digit = n%10;
      if (n < 100) return tens[Math.floor(n/10)-2] + (digit? "-" + num[digit]: "");
      if (n < 1000) return num[Math.floor(n/100)] +" hundred" + (n%100 === 0? "": " and " + numbersToWords(n%100));
      if (n < 1000000) return num[Math.floor(n/1000)] + " thousand" + (n%1000 !== 0? " " + numbersToWords(n%1000): "")
      return numbersToWords(Math.floor(n/1000000)) + " million" + (n%1000000 !== 0? " " + numbersToWords(n%1000000): "");
  }


  return (
    < div className="CalculatorWrapper">
       <input type="text" onSubmit={setInput}></input>
      <button onClick={() => numbersToWords(input)}>Click</button>
      <h1>{input}</h1>
    </div>
   
  );
};

export default Calculator;
