/*--------------------------------Challenge 1--------------------------------*/
/*Find the missing number in an array: 
Write a function that takes an array of integers as input, 
where all numbers in the array are consecutive except for one number that is missing. 
The function should return the missing number.*/

const numbers = [1,3,4,5,6,7,8,9,10];

function missingNumber(numbers){
    for (let index = numbers[0]; index < numbers[numbers.length-1]; index++) {
        let found = numbers.find(number => number === index); 
        if(found){
            continue;
        }
        else{
            return index;
        }
    }
}

console.log("The missing number is: ", missingNumber(numbers));

/*--------------------------------Challenge 2--------------------------------*/
/*Find the minimum and maximum numbers in an array: 
Write a function that takes an array of numbers as input 
and returns an object with the minimum and maximum numbers in the array.*/

function findMaxAndMin(numbers){
    const minNumber = Math.min(...numbers);
    const maxNumber = Math.max(...numbers);

    const MinAndMax = {min: minNumber, max: maxNumber};
    return MinAndMax;
}

console.log(findMaxAndMin(numbers));

/*--------------------------------Challenge 3--------------------------------*/
/*Find the first non-repeated character in a string: 
Write a function that takes a string as input and returns the first non-repeated character in the string. 
For example, `"aabbcdd"` should return `"c"`. You can use an object as a lookup directory 
to count the occurrences of each character in the string.*/

function nonRepeatedChar(myString){
    const charArray = myString.split("");
    for (let index = 0; index < charArray.length; index++) {
        const occurrence = charArray.filter(char => char === charArray[index])
        if(occurrence.length > 1){
            continue;
        }
        else{
            return charArray[index];
        }
    }
}

console.log(nonRepeatedChar("aabbcdd"));

/*--------------------------------Challenge 4--------------------------------*/
/*Create a class called `Person` with the following properties and methods:
  - Properties:
    - `name` (string)
    - `age` (number)
    - `interests` (array of strings)
  - Methods:
    - `greeting()`: returns a string that says "Hi, my name is `name`."
    - `bio()`: returns a string that says "My name is `name`, I'm `age` years old, and my interests are `interests`."*/

class Person{
    constructor(name, age, interests){
        this.name = name;
        this.age = age;
        this.interests = interests;
    }

    greeting(){
        const greeting = `Hi, my name is ${this.name}.`
        return greeting
    }

    bio(){
        const bio = `My name is ${this.name}, I'm ${this.age} years old, and my interests are ${this.interests}.`
        return bio;
    }
}    
const p1 = new Person('Hoor', 23, ['Research & Development ', 'Arabic literature'])
console.log(p1.greeting());
console.log(p1.bio());
