'use strict';
function logger() {
    console.log(`my name is ztl.`);
}
logger();
function FruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice = FruitProcessor(5, 0);
console.log(applejuice);
console.log(FruitProcessor(2, 6));

//Arrow Function:
const calcAges = Birthyear => 2050 - Birthyear;
const Age_ztl = calcAges(2000);
console.log(Age_ztl);
// if the function has many lines ,it also needs curly braces
const Year_For_Retirement = Birthyear => {
    const age = 2050 - Birthyear;
    const age_for_retire = 65 - age;
    return `ztl has ${age_for_retire} years to retire`;
}
const my_retire_need = Year_For_Retirement(2000);
console.log(my_retire_need);

//Reviewing Function:
const CalcAge = function (Birthyear) {
    return 2050 - Birthyear;
}