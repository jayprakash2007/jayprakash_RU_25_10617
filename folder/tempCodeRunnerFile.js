let number = 15;

if (number > 20) {
    console.log("The number is greater than 20");
} else if (number === 20) {
    console.log("The number is exactly 20");
} else {
    console.log("The number is less than 20");
}


console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}


console.log("WHILE LOOP:");
let count = 1;
while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}


console.log("DO...WHILE LOOP:");
let x = 1;
do {
    console.log("Value of x: " + x);
    x++;
} while (x <= 5)