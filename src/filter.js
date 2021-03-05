const filter = (array, func) => {
  filtered = [];
  array.forEach((element) => {
    filtered.push(func(element));
  });
  return filtered;
};

module.exports = filter;
