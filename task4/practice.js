// 1. Concatenation
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2); // Hello World
// 2. Length
let text = "JavaScript";

console.log(text.length); // 10
// 3. Accessing characters
let word = "Programming";

console.log(word.charAt(0)); // P
// 4. Substrings
let sentence = "coding is fun";
console.log(sentence.slice(0, 4)); // codi
// 5. Replacing characters
let animal = "cat";
console.log(animal.replace("a", "e")); // cet
/* Uppercase and lowercase:
 Question: Convert the string "javascript" to uppercase.*/
 let string =javascript;
 console.log(string.toLocaleUpperCase);
 /*7.7. Splitting strings:
Question: Split the string "apple,banana,orange" into an array of words.
Expected output: ["apple", "banana", "orange*/
let fruits = "apple,banana,orange";
let arr = fruits.split(",");
console.log(arr);
/*8. Joining arrays:
Question: Join the array ["hello", "world"] into a string with a space between each word.
Expected output: "hello world"*/
let arr=["hello", "world"] ;
console.log(arr.join(" "));
/*9. Trimming whitespace:
o Question: Remove any leading or trailing whitespace from the string " hello world ".
o Expected output: "hello world"*/
let string=" hello world ";
console.log(string.trim());
/*10. Searching for substrings:
 Question: Check if the string "world" exists in the string "hello world".
Expected output: true*/
let string= "hello world";
console.log(string.includes("world"));
/*11. Reversing a string:
Question: Reverse the string "hello".
 Expected output: "olleh"*/
 let string ="hello";
console.log(string.split("").reverse().join(""));
/*12. Counting occurrences:
Question: Count the number of times the letter "e" appears in the string "elephant".
Expected output:2*/
let string ="elephant";
let count = 0;
for(let i=0;i<string.length;i++)
{
    if(string[i] == "e")
        count++;
}
console.log(count);
/*13. Checking for palindromes:
Question: Determine if the string "racecar" is a palindrome.
 Expected output: true*/
let string ="racecar";
let reverse=string.split("").reverse().join("");
console.log(string == reverse);
/*14. Converting case:
Question: Convert the first letter of each word in the string "hello world" to uppercase.
 Expected output: "Hello World*/
let string = "hello world";

let words = string.split(" ");

let result =
    words[0][0].toUpperCase() + words[0].slice(1) + " " +
    words[1][0].toUpperCase() + words[1].slice(1);

console.log(result);
/*15. Formatting strings:
Question: Format the number 1234.5678 to have 2 decimal places.
Expected output: "1234.57"*/ 

let number = 1234.5678;

console.log(number.toFixed(2));
/*16. Extracting numbers:
Question: Extract all numbers from the string "There are 3 apples and 2 oranges".
Expected output: ["3", "2"]*/
let string = "There are 3 apples and 2 oranges";

console.log(string.match(/\d+/g));
/*17. Validating email:
Question: Check if the string "example@email.com" is a valid email address.
Expected output: true*/
let email = "example@email.com";

if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") < email.lastIndexOf(".")
) {
    console.log(true);
} else {
    console.log(false);
}
/*18. Censoring words:
Question: Replace all occurrences of the word "bad" with "good" in the string "This is a bad word".
Expected output: "This is a good word"*/
let string = "This is a bad word";

console.log(string.replace("bad", "good"));
/*19. Removing duplicates:
 Question: Remove duplicate characters from the string "aabbc".
Expected output: "abc"*/
let string = "aabbc";
let result = "";

for (let i = 0; i < string.length; i++) {
    if (!result.includes(string[i])) {
        result += string[i];
    }
}

console.log(result); // abc
/*20. Sorting characters:
Question: Sort the characters in the string "hello" alphabetically.
Expected output: "ehllo"*/
let string = "hello";

console.log(string.split("").sort().join(""));
/*21. Checking for anagrams:
Question: Determine if the strings "listen" and "silent" are anagrams.
Expected output: true*/
let word1 = "listen";
let word2 = "silent";

let str1 = word1.split("").sort().join("");
let str2 = word2.split("").sort().join("");

console.log(str1 == str2);
/*22. Reverse Words in a Sentence
Question: Write a function that takes a string as input and returns the string with the order of words reversed, but the words themselves should remain in their original order.
Input: "The quick brown fox"
Expected Output: "fox brown quick The"*/
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

let text = "The quick brown fox";

console.log(reverseWords(text));
/*23. Find the Longest Word
 Question: Create a function that finds the longest word in a given string. If there are multiple words of the same length, return the first one.
Input: "Web development is fascinating"
Expected Output: "development"*/
function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

let text = "Web development is fascinating";

console.log(longestWord(text)); // development
/*24. Palindrome Check
Question: Write a function that checks if a given string is a palindrome, ignoring case, spaces, and punctuation.
Input: "A man, a plan, a canal, Panama!"
Expected Output: true*/
function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    str = str.replaceAll(",", "");
    str = str.replaceAll("!", "");

    let reverse = str.split("").reverse().join("");

    return str == reverse;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
/*25. Character Frequency
Question: Create a function that returns an object where the keys are the characters in the string and the values are the number of times each character appears.
Input: "mississippi"
Expected Output: {m: 1, i: 4, s: 4, p: 2}*/
function charFrequency(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        if (result[str[i]]) {
            result[str[i]]++;
        } else {
            result[str[i]] = 1;
        }
    }

    return result;
}

console.log(charFrequency("mississippi"));
/*26. Replace Vowels with Numbers
 Question: Write a function that replaces vowels in a string with their corresponding numbers (a=1, e=2, i=3, o=4, u=5).
Input: "Hello World"
Expected Output: "H2ll4 W4rld"*/
function replaceVowels(str) {
    str = str.replaceAll("a", "1");
    str = str.replaceAll("e", "2");
    str = str.replaceAll("i", "3");
    str = str.replaceAll("o", "4");
    str = str.replaceAll("u", "5");

    return str;
}

console.log(replaceVowels("Hello World"));