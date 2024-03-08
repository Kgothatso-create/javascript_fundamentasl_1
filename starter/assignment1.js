let country = "SA";
let continent = 'Africa';
let population = 1000000;

console.log (country + continent + population)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
if (BMIJohn > BMIMark){
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} else {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
}
