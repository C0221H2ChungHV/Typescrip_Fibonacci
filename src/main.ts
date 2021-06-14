let number:number = 10;
let n1:number = 0;
let n2:number = 1;
let next:number;
let sum:number = 0;
console.log('Fibonacci Series:');

for (let i:number = 1; i <= number; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
    sum+=n1;
}
console.log('Sum = '+sum);