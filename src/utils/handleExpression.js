import { evaluate } from "./evaluate";
function addDigit(state, action) {
  const lastChar = state.expression.slice(-1);
  if (lastChar == "." || lastChar == ",") {
    if (action.type == "." || action.type == ",") {
      return { ...state, expression: state.expression };
    }
  }

  return { ...state, expression: state.expression + action.type };
}

function backspace(state, action) {
  return {
    ...state,
    expression: state.expression.slice(0, -1),
  };
}

function clear(state, action) {
  return {
    ...state,
    expression: "",
  };
}

function percent(state, action) {
  const symbols = ["+", "-", "*", "/"];
  let lastSymbol = -1;

  for (let i = 0; i < state.expression.length; i++) {
    if (symbols.includes(state.expression[i])) {
      lastSymbol = i;
    }
  }

  const lastNumber = state.expression.substring(lastSymbol);
  const allBeforeLastNumber = state.expression.substring(0, lastSymbol);
  const percentOfAll = evaluate(allBeforeLastNumber) * (lastNumber / 100);

  return {
    ...state,
    expression:
      allBeforeLastNumber +
      (percentOfAll > 0 ? "+" + percentOfAll : percentOfAll),
  };
}

export { addDigit, backspace, clear, percent };
