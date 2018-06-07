// Assignment: [lab] Largest number and smallest number
// Write a function that takes in an array and returns another whose first
// element is the smallest number and whose second element is the largest number.

// For example if you call the function with array [3,64,3,56,34,12,5,0]
// you should get back an array [0, 64]

const numbersArray = [1, 3, 64, 3, 56, 34, 12, 5, 0];

function smallestAndLargestNumber(numbers) {
    let smallest = numbers[0];
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }

        if (number < smallest) {
            smallest = number;
        }
    }

    return [smallest, largest];
}

smallestAndLargestNumber(numbersArray);
