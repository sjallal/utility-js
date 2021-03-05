const reduce = require("./reduce");

const max = (array) => {
  const maxReducer = (a, b) => (a > b ? a : b);
  return reduce(array, maxReducer, undefined);
};

module.exports = max;
