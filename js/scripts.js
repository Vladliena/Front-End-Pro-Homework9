
const numbersArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Task 1

let result = 0;
let value = [];

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
        result += numbersArray[i];
        value.push(numbersArray[i]);
    }
}
console.log(`Сумма : ${result} Количество: ${value.length}`)

//Task 2

let minimalNumber = numbersArray[0];


for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[i] < minimalNumber)
        minimalNumber = numbersArray[i]
}
console.log(minimalNumber)

//Task 3

