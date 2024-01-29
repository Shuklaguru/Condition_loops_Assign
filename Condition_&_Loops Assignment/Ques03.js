//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//for in
const person = { name: 'John', age: 30, gender: 'male' };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
 //for of
 const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}

//for each
const number = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num);
});



