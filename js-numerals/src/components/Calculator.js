import React, { useState } from "react";

const Calculator = () => {
const [input, setInput] = useState(0);

const numbers = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function numbersToWords(input){
  const digit = input%10;
      if (input != parseFloat(input)) return "Please type a number";
      if (input < 20) return numbers[input];
      if (input < 100) return tens[Math.floor(input/10)-2] + (digit? "-" + numbers[digit]: "");
      if (input < 1000) return numbers[Math.floor(input/100)] +" hundred" + (input%100 === 0? "": " and " + numbersToWords(input%100));
      return numbersToWords(Math.floor(input/1000)) + " thousand" + (input%1000 !== 0? " " + numbersToWords(input%1000): "");
  } 



  return (
    <div>
      <div className="Title">
        <h1>Number Conversion Tool</h1>
      </div>
      <div className="InputWrapper">
        <input
          type="text"
          maxlength="6"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div className="Words">
        <h1>{numbersToWords(input)}</h1>
      </div>
    </div>   
  );
};

export default Calculator;