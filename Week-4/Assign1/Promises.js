// Implement a function namedgetNumberwhich generatesa random number. If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a variable.

const getNumber = () =>
  new Promise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Rejected with num: ${randomNumber} `);
      }
      res(`Resolved with num: ${randomNumber}`);
    }, randomNumber * 10);
  });
