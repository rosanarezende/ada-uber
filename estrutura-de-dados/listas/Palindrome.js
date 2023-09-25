// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

// Given the string, check if it is a palindrome.

var isPalindrome = function(head) {
  let current = head 
  let list = []
  while (current !== null) { 
      list.push(current.val)
      current = current.next
  } 

  let i = 0
  let j = list.length - 1
  while (i < j) {
      if (list[i] !== list[j]) {
          return false
      }
      i++
      j--
  }

  return true

}


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
