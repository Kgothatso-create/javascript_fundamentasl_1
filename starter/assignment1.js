let country = "SA";
let continent = "Africa";
let population = 1000000;

console.log(country + continent + population);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
if (BMIJohn > BMIMark) {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} else {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

/* Write your code below. Good luck! 🙂 */

const calcTip = function (bill) {
  let tip = 0;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    return tip;
  } else {
    tip = bill * 0.2;
    return tip;
  }
};

const bills = [125, 555, 44];
const tips = [];
const totals = [];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

tips.push(tip1, tip2, tip3);
totals.push(tip1 + bills[0], tip2 + bills[1], tip3 + bills[2]);
console.log(tips);
console.log(totals);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let breathing = function (array) {
  for (i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      console.log(`even number ${i}`);
    } else {
      console.log(`odd number ${i}`);
    }
  }
};

breathing(array);
