function addDigit(state, action) {
  let lastChar = state.expression.slice(-1);
  if (lastChar == "." || lastChar == ",") {
    if (action.type == "." || action.type == ",") {
      return { ...state, expression: state.expression };
    }
  }

  return { ...state, expression: state.expression + action.type };
}

export { addDigit };
