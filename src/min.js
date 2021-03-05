const reduce = require("./reduce");

const min = (array) => {
  const minReducer = (a, b) => (a < b ? a : b);
  return reduce(array, minReducer, undefined);
};

module.exports = min;
