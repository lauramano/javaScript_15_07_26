'use strict';
console.log('labas');

    const numbers=[1,2,3,5.3,8,-8,-5.5,-6,-16,-5,-9,4.2,5,12,-6,45];
    const numberMax = numbers.reduce((maxSk, sk) =>Math.max(maxSk, sk), numbers[0]);
    console.log('Didziausias skaicius', numberMax);
