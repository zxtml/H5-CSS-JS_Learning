'use strict';
const Firends = ['Michale', 'Jackie', 'Tom', 'Zhachary'];
//using a spuare braces 
console.log(Firends);
const Years = new Array(2001, 2018, 2019, 2020, 2021);
console.log(Years[Years.length - 1]);
//property
Firends[2] = 'Steven';//so,love can be fade,right?
console.log(Firends);
//Firends = ['Bob', 'Tim'];//it is illegal

const firstname = 'Zhachary';
const ztl = [firstname, 'Tim', 18, Firends];
//JS Array can hold different kinds of data
const calcage = BirthYear => 2050 - BirthYear;
const add = BirthYear => BirthYear + 10;
console.log(calcage(Years));
console.log(add(Years));
//so array can't be calculated