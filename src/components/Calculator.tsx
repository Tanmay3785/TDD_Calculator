import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");

  return (
    <div>
      <div data-testid="result" className="result">
        {input}
      </div>
      <div>
        <button data-testid="button-1" disabled>
          1
        </button>
        <button data-testid="button-2" disabled>
          2
        </button>
        <button data-testid="button-3" disabled>
          3
        </button>
        <button data-testid="button-plus" disabled>
          +
        </button>
      </div>
    </div>
  );
};

export default Calculator;
