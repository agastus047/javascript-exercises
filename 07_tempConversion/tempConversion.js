const ftoc = function(tInF) {
  let tInC = (tInF - 32) * 5/9;
  let tInC1 = +(tInC.toFixed(1));
  return tInC1;

};

const ctof = function(tInC) {
  let tInF = tInC * 9/5 + 32;
  let tInF1  = +(tInF.toFixed(1));
  return tInF1;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
