// Question Name: nextBiggerNumSameDigits

// Problem Statement: You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12   // => 21
// 513  // => 531
// 2017 // => 2071
// If no bigger number can be composed using those digits, return -1:

// 9   // => -1
// 111 // => -1
// 531 // => -1

const nextBiggerNumSameDigits = (num) => {
    
    let myArray = ((num + '').split('')).map(element => parseInt(element));
    let copyArray = myArray.slice();

    copyArray.sort((a,b) => b - a);
    if (myArray.join() === copyArray.join()) {
        return -1;
    }

    let holder = [];
    let index = myArray.length - 1;
    for (let i = myArray.length - 1; i > 0; i--) {
        if (myArray[i] > myArray[i-1]) {
            holder.push(myArray[i-1])
            myArray[i-1] = myArray[i];
            break;
        } else {
            holder.push(myArray[i]);
            index = i-1;
        }
    }

    holder.sort((a, b) => a - b);
    myArray.splice(index);
    myArray = myArray.concat(holder);
    return parseInt(myArray.join(''))
}

console.log(12, nextBiggerNumSameDigits(12));
console.log(513, nextBiggerNumSameDigits(513));
console.log(2170, nextBiggerNumSameDigits(2170));
console.log(564321, nextBiggerNumSameDigits(564321));

console.log(9, nextBiggerNumSameDigits(9));
console.log(111, nextBiggerNumSameDigits(111));
console.log(531, nextBiggerNumSameDigits(531));