function isPalindrome(s) {
    //Sanitize string
    let newS = s.toLowerCase().replace(/[\W_]/g, "")
    // set up left and right pointer at beginning and end of string
    let left = 0
    let right = newS.length - 1
    // while left is less than right
    while (left>right){
        // if char at left and right pointer are not the same, return false; otherwise return ture
        if (newS[left]!== newS[right]){
            return false
        }
        left++
        right--
    }
    return true
}

//Does not work with white space LeetCode question

//this will work with whitespace!

// function isPalindrome(s) {
//     let i = 0;
//     let j = s.length - 1;
//     let regex = /[a-z0-9]/i;
//     while (i <= j) {
//         if (!regex.test(s[i])) {
//             i++;
//         } else if (!regex.test(s[j])) {
//             j--;
//         } else if (s[i++].toLowerCase() !== s[j--].toLowerCase()) {
//             return false;
//         }
//     }
//     return true;
// };
module.exports = isPalindrome;
