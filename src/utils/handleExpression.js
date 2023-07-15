function addDigit(state, action) {
  let lastChar = state.expression.slice(-1);
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

export { addDigit, backspace };
