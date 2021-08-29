/*
  This variation of FizzBuzz users counters to keep track, meaning no division!
  The downside will be that you cannot turn this in to a function 
  that returns fizzbuzz for a given number.
  The upside is no modulus operations will make it incredibly fast.
*/

const fizzBuzz = (to) => {
  let fizz = 3;
  let buzz = 5;
  let counter = 0;

  while (counter < to) {
    counter++;

    console.log(
      `${!--fizz ? "fizz" : ""}${!--buzz ? "buzz" : ""}${
        fizz && buzz ? counter : ""
      }`
    );
    if (!fizz) fizz = 3;
    if (!buzz) buzz = 5;
  }
};

fizzBuzz(Number(process.argv[2] || 20));
