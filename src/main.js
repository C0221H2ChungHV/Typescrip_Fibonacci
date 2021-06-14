var number = 10;
var n1 = 0;
var n2 = 1;
var next;
var sum = 0;
console.log('Fibonacci Series:');
for (var i = 1; i <= number; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
    sum += n1;
}
console.log('Sum = ' + sum);
