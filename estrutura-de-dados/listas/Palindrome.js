// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
  let reversedString = '';
  const lastIndex = inputString.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    const char = inputString[i];
    reversedString += char;
  }

  return inputString === reversedString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));


/// ==== swift? ====
// func checkPalindrome(inputString: String) -> Bool {
//   let reversedString = ""
//   let lastIndex = inputString.count - 1
//   let inputStringArray = Array(inputString)

//   for i in stride(from: lastIndex, through: 0, by: -1) {
//     let char = inputStringArray[i]
//     reversedString += String(char)
//   }

//   return inputString == reversedString
// }

// print(checkPalindrome(inputString: "aabaa"))
