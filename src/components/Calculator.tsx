import React, { useState } from "react";
import "../Calculator.css";
const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");
  const [prevInput, setPrevInput] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("0");
      setPrevInput("");
      setOperator("");
      return;
    }

    if (value === "=") {
      if (operator && prevInput) {
        if (operator === "+") {
          setInput((parseFloat(prevInput) + parseFloat(input)).toString());
        } else if (operator === "-") {
          setInput((parseFloat(prevInput) - parseFloat(input)).toString());
        } else if (operator === "*") {
          setInput((parseFloat(prevInput) * parseFloat(input)).toString());
        } else if (operator === "/") {
          setInput((parseFloat(prevInput) / parseFloat(input)).toString());
        }
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
      setPrevInput(input);
      setInput("0");
    } else if (value === ".") {
      if (!input.includes(".")) {
        setInput(input + ".");
      }
    } else {
      if (input === "0") {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div data-testid="result" className="display">
          {input}
        </div>

        <div className="keypad">
          <button
            onClick={() => handleClick("C")}
            data-testid="button-clear"
            className="button clear"
          >
            C
          </button>
          <button
            onClick={() => handleClick("/")}
            data-testid="button-divide"
            className="button operator"
          >
            ÷
          </button>
          <button
            onClick={() => handleClick("*")}
            data-testid="button-multiply"
            className="button operator"
          >
            ×
          </button>
          <button
            onClick={() => handleClick("-")}
            data-testid="button-minus"
            className="button operator"
          >
            −
          </button>

          <button
            onClick={() => handleClick("7")}
            data-testid="button-7"
            className="button number"
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            data-testid="button-8"
            className="button number"
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            data-testid="button-9"
            className="button number"
          >
            9
          </button>
          <button
            onClick={() => handleClick("+")}
            data-testid="button-plus"
            className="button operator"
          >
            +
          </button>

          <button
            onClick={() => handleClick("4")}
            data-testid="button-4"
            className="button number"
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            data-testid="button-5"
            className="button number"
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            data-testid="button-6"
            className="button number"
          >
            6
          </button>
          <button
            onClick={() => handleClick("=")}
            data-testid="button-equal"
            className="button equal"
          >
            =
          </button>

          <button
            onClick={() => handleClick("1")}
            data-testid="button-1"
            className="button number"
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            data-testid="button-2"
            className="button number"
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            data-testid="button-3"
            className="button number"
          >
            3
          </button>

          <button
            onClick={() => handleClick("0")}
            data-testid="button-0"
            className="button number zero"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            data-testid="button-decimal"
            className="button number"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
