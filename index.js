// Part 1: Fizz Buzz
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            console.log(num + ": Fizz Buzz"); 
        } else {
            console.log(num + ": Fizz");
        }
    } else if (num % 5 === 0) {
        console.log(num + ": Buzz");
    } else {
        console.log(num);   
    }
}

// Part 2: Prime Time
let number = 10;
let isPrime = true;

do {
    number++;
    for (let i = 2; i < number; i++) {
        if (number > 2 && number % i === 0) {
            isPrime = false;
            break;
        } 
    }
    if (isPrime) {
        console.log(number);
    }
} while (!isPrime) {}

// Part 3: Feeling Loopy
const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = str.split("\n");
let cells = "";
console.log(rows);

for (let i = 0; i < rows.length; i++) {
    cells = rows[i].split(",");
    console.log(cells);
}

const strg = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
const lines = strg.split("\n");
let cells2 = "";
console.log(lines);

for (let j = 0; j < strg.length; j++) {
    cells2 = lines[j].split(",");
    console.log(cells2);
}