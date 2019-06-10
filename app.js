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

app.listen(8001, () => {
  console.log('working on 8001');
});