/* eslint-disable eqeqeq */
import React, { useState } from "react";

const Calculator2 = () => {
  const [input, setInput] = useState(0);

  var separator = ["", "thousand", "million", "billion", "trillion"];
  var nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var tens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  var twenies = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function numbersToWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g, "");
    if (s != parseFloat(s)) return "Type a number";
    var x = s.indexOf(".");
    if (x == -1) x = s.length;
    if (x > 15) return "too big";
    var n = s.split("");
    var str = "";
    var supportNumber = 0;
    for (var i = 0; i < x; i++) {
      if ((x - i) % 3 == 2) {
        if (n[i] == "1") {
          str += tens[Number(n[i + 1])] + " ";
          i++;
          supportNumber = 1;
        } else if (n[i] != 0) {
          str += twenies[n[i] - 2] + " ";
          supportNumber = 1;
        }
      } else if (n[i] != 0) {
        str += nums[n[i]] + " ";
        if ((x - i) % 3 == 0) str += "hundred ";
        supportNumber = 1;
      }
      if ((x - i) % 3 == 1) {
        if (supportNumber) str += separator[(x - i - 1) / 3] + " ";
        supportNumber = 0;
      }
    }

    if (x != s.length) {
      var y = s.length;
      str += "point ";
      for (var i = x + 1; i < y; i++) str += nums[n[i]] + " ";
    }
    return str.replace(/\s+/g, " ");
  }

  return (
    <div>
      <div className="Title">
        <h1>Number Conversion Tool</h1>
      </div>
      <div className="InputWrapper">
        <input
          type="number"
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

export default Calculator2;
