export function core(data = '') {
  if (!isNaN(data.slice(-1))) {
    return eval(data);
  } else {
    return false;
  }
}
