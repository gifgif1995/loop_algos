// Sum from 1 to 10, printing out the number and current sum so far at each step of the way
// The expected output will be:
// Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15 .... etc

// YOUR CODE HERE 
var num;
var sum=0
for(num=1; num<=10; num++){
    console.log("Num: " +num);
    sum = sum+num;
    console.log("Sum: " +sum);
}