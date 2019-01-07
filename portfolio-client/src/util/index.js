export const getElementHeight = function (elem) {
  var box = elem.getBoundingClientRect();
  return box.top + pageYOffset;
};
