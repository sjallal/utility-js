const reduce = (array, func, arg) => {
  if (array.length == 0 && !arg) return undefined;
  let reduced = "";
  if (arg) reduced = arg;
  array.forEach((element) => {
    reduced = func(reduced, element);
  });
  return reduced;
};

module.exports = reduce;
