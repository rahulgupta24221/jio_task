
const args = process.argv;


let sum = 0;

// Loop through arguments starting from index 2
for (let i = 2; i < args.length; i++) {

    sum += +args[i];
}


console.log(sum);
