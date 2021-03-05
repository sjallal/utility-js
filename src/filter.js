const filter = (array, func) => {
  filtered = [];
  array.forEach((element) => {
    if (func(element)) filtered.push(element);
  });
  return filtered;
};

module.exports = filter;
