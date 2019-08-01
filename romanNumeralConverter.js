function convertToRoman(num) {
  var romanNumeral = '';
  var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i <= values.length; i++) {
    while (num%values[i] < num) {
      romanNumeral += romanSymbols[i];
      num -= values[i];
    }
  }
  console.log(romanNumeral);

  return romanNumeral;
}

convertToRoman(649);
