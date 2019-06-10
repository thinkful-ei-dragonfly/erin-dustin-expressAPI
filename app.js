'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/sum', (req,res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const c = a + b;

  res.send(`The sum of ${a} and ${b} is ${c}`);

});

app.get('/cipher', (req,res) => {
  const text = req.query.text.toLowerCase();
  const shift = parseInt(req.query.shift);
  const string = text.split('');
  // const number = String.

  let mappedText = string.map((letter, index) => {
    let charCode = text.charCodeAt(index);
    if ((charCode + shift) > 116) {
      charCode = charCode - 26 + shift;
    } else {
      charCode = charCode + shift;
    }
    return String.fromCharCode(charCode);
  }).join('');

  res.send(mappedText);
});

app.get('/lotto', (req,res) => {
  const arr = req.query.arr.map(num => parseInt(num));
  const random = arr.map(() => Math.floor(Math.random()*20));
  // const random = [9,2,3,4,5,6]
  const matches = random.reduce((total,num) => {
    if (arr.includes(num)){
      total ++;
    }
    return total;
  }, 0);
  // const matches = 6;

  if (matches <4) {
    res.send('Sorry, you lose');
  } else if (matches === 4){
    res.send('Congratulations, you win a free ticket');
  } else if (matches === 5) {
    res.send('Congratulations! You win $100!');
  } else {
    res.send('Wow! Unbelievable! You could have won the mega millions!');
  }
});

app.listen(8001, () => {
  console.log('working on 8001');
});