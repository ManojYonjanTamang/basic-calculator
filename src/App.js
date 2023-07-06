import { useState } from "react";
import "./App.css";
import CalcButtons from "./CalcButtons";

function App() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  const handleNumber = (value) => {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp,
    });
  };

  const handleOperator = (value) => {
    const total = doCalculation();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value,
    });
  };

  const handleClear = () => {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
  };

  const doCalculation = () => {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "/":
        total /= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "+":
        total += parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  };

  function renderDisplay() {
    return calc.current;
  }

  return (
    <>
      <div className="calculator">
        <div className="display">{renderDisplay()}</div>

        <CalcButtons value="7" onClick={handleNumber} />
        <CalcButtons value="8" onClick={handleNumber} />
        <CalcButtons value="9" onClick={handleNumber} />
        <CalcButtons
          value="/"
          onClick={handleOperator}
          className="calcOperator"
        />

        <CalcButtons value="4" onClick={handleNumber} />
        <CalcButtons value="5" onClick={handleNumber} />
        <CalcButtons value="6" onClick={handleNumber} />
        <CalcButtons
          value="*"
          onClick={handleOperator}
          className="calcOperator"
        />

        <CalcButtons value="1" onClick={handleNumber} />
        <CalcButtons value="2" onClick={handleNumber} />
        <CalcButtons value="3" onClick={handleNumber} />
        <CalcButtons
          value="-"
          onClick={handleOperator}
          className="calcOperator"
        />

        <CalcButtons value="C" onClick={handleClear} className="clear" />
        <CalcButtons value="0" onClick={handleNumber} />
        <CalcButtons
          value="="
          onClick={handleOperator}
          className="calcOperator"
        />
        <CalcButtons
          value="+"
          onClick={handleOperator}
          className="calcOperator"
        />
      </div>
    </>
  );
}

export default App;
