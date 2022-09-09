const agezxtml = 2022 - 2001;
const massmark = 70;
const massjohn = 65;
const heightmark = 178;
const heightjohn = 180;
let BMImark = massmark / (heightmark ** 2);
let BMIjohn = massjohn / (heightjohn ** 2);
let markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);