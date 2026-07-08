
/*
1
Correct the syntax error*/
let num= [ 1,7,9, 4 ,5, ];
let name=["Str" ,"alex","moh","the","fox", "over", "lazy", "dog" ];
/*
2
What the index of "Banana","Tomato"*/
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));
let Food = ["burger", "pizza", "mansaf", "shawarma", "pasta"];
let Sport = ["Football", "Basketball","Tennis"];
let Movie = ["IT", "Maze Runner", "Titanic", "Avatar", "Inception"];
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array*/
function firstOfArray(arr) {
    return arr[0];
}

console.log(firstOfArray(["1", "4", "5"])); // 1
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
*/
function lastOfArray(arr) {
    return arr[arr.length - 1];;
}

console.log(lastOfArray([1,4,5])); // 5
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0, 5, 7, 9];

array.shift();           // [5, 7, 9]
array.unshift(1, 3, 4);  // [1, 3, 4, 5, 7, 9]
array.splice(3, 2, 6, 8); // [1, 3, 4, 6, 8, 9]
array.push(10);          // [1, 3, 4, 6, 8, 9, 10]

console.log(array);         

/*
7
Using the console try to figure out what the things that
(push, unshift, shift, pop) return to you.

var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];
console.log(array2.push(10)); // 5
console.log(array2); // [5, 9, -7, 3.5, 10]

var array2 = [5, 9, -7, 3.5];
console.log(array2.unshift(1)); // 5
console.log(array2); // [1, 5, 9, -7, 3.5]

var array2 = [5, 9, -7, 3.5];
console.log(array2.pop()); // 3.5
console.log(array2); // [5, 9, -7]

var array2 = [5, 9, -7, 3.5];
console.log(array2.shift()); // 5
console.log(array2); // [9, -7, 3.5]
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
    if (arr.length % 2 !== 0) {
        return arr[(arr.length - 1) / 2];
    } else {
        return arr[arr.length / 2 - 1] + " and " + arr[arr.length / 2];
    }
}
console.log(middleOfArray([1, 4, 5])); // 4
console.log(middleOfArray(["t", "u", "g", "x"])); // u and g
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];

animals[0] = "zebra";
animals[1] = "elephant";
animals.length = 2;
console.log(animals);

var nums = [1, 2, 3, 8, 9];

nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;

console.log(nums);
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr, index) {
    return arr[index];
}

var nums = [1, 2, 3, 8, 9];

console.log(indexOfArray(nums, 3)); // 8
console.log(indexOfArray(nums, 1)); // 2
console.log(indexOfArray(nums, 4)); // 9
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr) {
    return arr.slice(0, arr.length - 1);
}

var nums = [1, 2, 3, 8, 9];

console.log(arrayExceptLast(nums)); // [1, 2, 3, 8]
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr ,value) {
    arr.push(value);
    return arr;
}

var nums= [1,2,3,8,9]
console.log(addToEnd(nums,55)); // [1,2,3,8,9,55]
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

var nums = [1, 2, 3, 8, 9];

console.log(sumArray(nums)); // 23
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
    function minInArray(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

var nums = [1, 2, 3, 8, 9];

console.log(minInArray(nums)); // 1
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, value) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != value) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

var nums = [1, 2, 3, 8, 9];

console.log(removeFromArray(nums, 8)); // [1, 2, 3, 9]
function removeFromArray(arr, value) {
    let newArray = [];
    let i = 0;

    while (i < arr.length) {
        if (arr[i] != value) {
            newArray.push(arr[i]);
        }
        i++;
    }

    return newArray;
}

var nums = [1, 2, 3, 8, 9];

console.log(removeFromArray(nums, 8)); // [1, 2, 3, 9]
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i]);
        }
    }

    return odd;
}

var nums = [1, 2, 3, 8, 9];

console.log(oddArray(nums)); // [1, 3, 9]
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

var nums = [1, 2, 3, 8, 9];
console.log(aveArray(nums)); // 4.6

var nums2 = [1, 2, 3, 8, 9, 77];
console.log(aveArray(nums2)); // 16.666666666666668
function aveArray(arr) {
    let sum = 0;
    let i = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
    }

    return sum / arr.length;
}

var nums = [1, 2, 3, 8, 9];
console.log(aveArray(nums)); // 4.6

var nums2 = [1, 2, 3, 8, 9, 77];
console.log(aveArray(nums2)); // 16.666666666666668
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr) {
    let shortest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }

    return shortest;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

console.log(shorterInArray(strings)); // alex
function shorterInArray(arr) {
    let shortest = arr[0];
    let i = 0;

    while (i < arr.length) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
        i++;
    }

    return shortest;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

console.log(shorterInArray(strings)); // alex

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count++;
        }
    }

    return count;
}

var string = "alex mercer madrasa rashed2 emad hala";

console.log(repeatChar(string, "a")); // 6
console.log(repeatChar(string, "z")); // 0
function repeatChar(str, char) {
    let count = 0;
    let i = 0;

    while (i < str.length) {
        if (str[i] == char) {
            count++;
        }
        i++;
    }

    return count;
}

var string = "alex mercer madrasa rashed2 emad hala";

console.log(repeatChar(string, "a")); // 6
console.log(repeatChar(string, "z")); // 0
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i].length % 2 != 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

console.log(evenIndexOddLength(strings)); // ["madrasa"]
function evenIndexOddLength(arr) {
    let result = [];
    let i = 0;

    while (i < arr.length) {
        if (i % 2 == 0 && arr[i].length % 2 != 0) {
            result.push(arr[i]);
        }
        i++;
    }

    return result;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

console.log(evenIndexOddLength(strings)); // ["madrasa"]
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** i);
    }

    return result;
}

var nums = [44, 5, 4, 3, 2, 10];

console.log(powerElementIndex(nums));
// [1, 5, 16, 27, 16, 100000]
function powerElementIndex(arr) {
    let result = [];
    let i = 0;

    while (i < arr.length) {
        result.push(arr[i] ** i);
        i++;
    }

    return result;
}

var nums = [44, 5, 4, 3, 2, 10];

console.log(powerElementIndex(nums));
//[1, 5, 16, 27, 16, 100000]
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];

console.log(evenNumberEvenIndex(nums)); // [2, 8, 34]
function evenNumberEvenIndex(arr) {
    let result = [];
    let i = 0;

    while (i < arr.length) {
        if (i % 2 == 0 && arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
        i++;
    }

    return result;
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];

console.log(evenNumberEvenIndex(nums)); // [2, 8, 34]
