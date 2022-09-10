// Template Literals are eazier than string_plus_plus
const firstname = 'Zhachary';
const age = 18;
const job = 'universaty_student';
// just using the '` `' and culy braces'{ }'
// it's a assembly string
const ztl = `I'm ${firstname},a ${age} old years ${job}.`;
console.log(ztl);
// not just using in the string ,the backticks can be used in every string like:
console.log(`this is just a test for backticks.`);
// not only this ,it also can make the multiline string easily
console.log('this\n\
is a\n\
multiline with bracket.');
console.log(`this
is a 
multiline with backticks.`);
// it's log cleaner

// -------------------------------------------------------
// if_else Statement
const isOldEnough = age >= 18;
// the value can be a judgement
if (isOldEnough) {
  console.log(`ztl can get a driver-license`);
}

// -------------------------------------------------------
// if we want a string to do some caculations:
// when we have a string ,and add something to the string,
// it will basically concatenate the string like:
const BirthYear = '2000';
console.log(BirthYear + 18);
//and we get a string about '200018'
//so ,we need a way to fix this:
console.log(Number(BirthYear) + 18);
// the first is to use the function of Number
console.log(Number('ztl'));
// but if we use the function into a string , it won't really work
// we get a NaN,it means not a number
console.log('I am ' + 18 + ' years old');
// like this ,js will let the operation between a string and a number convert a string
console.log('2018' - '10');
// but the minus operator actually trigers the opposite convertion
console.log('20' * '2');
// and the multiple operator makes the same

// ---------------------------------------------------------
// 5 false value : 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('ztl'));
console.log(Boolean());

//double equal has the type coercion,but the trible equal doesn't have
console.log('18' == 18); //loose
console.log('18' === 18); //strict
