const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) * 5/9;
  const rounded = Math.round(tempC * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(tempC) {
  const tempF = (tempC * (9/5)) + 32;
  const rounded = Math.round(tempF * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
