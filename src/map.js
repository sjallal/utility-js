const map = (array, func) => {
  let mapped = [];
  array.forEach((element) => {
    mapped.push(func(element));
  });
  return mapped;
};

module.exports = map;
