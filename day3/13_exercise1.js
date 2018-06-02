// functions
// lets make a function that converts CAD to USD
// lets make a function that coverts C to F

// lowercase & camelCase

everySubsequentWordIsCapitalize();
// ruby - snake_case
every_word_is_connected_with_an_underscore();

// kebab-case
// first-name;
// every-word-is-skewered;

// hungarian notation
// iAge = 39;
// sName = "Jacob";

// function convertsCADToUSD() {}

function convertCurrency( cad ) {
  let usd = cad * 0.77;
  return usd;
}

convertCurrency(1);


function convertCurrency( cad ) {
  return (cad * 0.77);
}

convertCurrency(2);

function convertTemperature( c ) {
  let f = (c * (9 / 5)) + 32;
  return f;
}

function convertTemperature( c ) {
  return (c * (9 / 5)) + 32;
}

convertTemperature(37); // 98.6F???







//
