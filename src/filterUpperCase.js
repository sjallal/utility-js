const filterUpperCase = (element) => {
  //   console.log("A".charCodeAt()); 65
  //   console.log("Z".charCodeAt()); 90
  let ascii = element.charCodeAt();
  if (ascii >= 65 && ascii <= 90) return true;
  return false;
};

// filterUpperCase();

module.exports = filterUpperCase;
