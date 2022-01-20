const ROMAN_NUMBER_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let intNum = 0,
    currentDigit,
    nextDigit;
  for (let i = 0; i < s.length; i++) {
    (currentDigit = s[i]), (nextDigit = s[i + 1]);
    if (
      (currentDigit === "I" && (nextDigit === "V" || nextDigit === "X")) ||
      (currentDigit === "X" && (nextDigit === "L" || nextDigit === "C")) ||
      (currentDigit === "C" && (nextDigit === "D" || nextDigit === "M"))
    ) {
      intNum +=
        ROMAN_NUMBER_VALUES[nextDigit] - ROMAN_NUMBER_VALUES[currentDigit];
      i++;
      continue;
    }
    intNum += ROMAN_NUMBER_VALUES[currentDigit];
  }
  return intNum;
};

/**
 * Time Complexity = O(n), where n is the number of characters in the string `s`
 */
