export const add = (a, b) => {
  return a + b
};

export const subtract = (a, b) => {
  return a - b
};

export const multiply = (a, b) => {
  return a * b
};

export const divide = (a, b) => {
  return a / b
};

export const power = (a, b) => {
  return Math.pow(a,b)
};

export const round = (a) => {
  // your code here
  return Math.round(a)
};

export const roundUp = (a) => {
  // your code here
  return Math.ceil(a)
};

export const roundDown = (a) => {
  // your code here
  return Math.floor(a)
};

export const absolute = (a) => {
  // your code here
  return Math.abs(a)
};

export const quotient = (a, b) => {
  // your code here
  var c = a/b
  if (c < 0){
    return Math.ceil(c)
  } if (c >= 0){
    return Math.floor(c)
  }
};
