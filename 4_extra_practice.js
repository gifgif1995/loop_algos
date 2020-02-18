// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// YOUR CODE HERE
/*
for(var j=1; j<20; j++){
    if(j%2==1){
        console.log(j)
    }
}*/
var j=1
while (j<20){
    if(j%2==1)
    console.log(j);
    j++;
}
/*****************
var num;
var sum=0
for(num=1; num<=10; num++){
    console.log("Num: " +num);
    sum = sum+num;
    console.log("Sum: " +sum);
}
*/
console.log("REFERENCE BLOCK")

var num=1;
var sum=0
while(num<=10){
    console.log("Num: " +num);
    sum = sum+num;
    console.log("Sum: " +sum);
    num++;
}

console.log("REFERENCE BLOCK")

/*for (var i=1; i<31; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }    
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}*/

var i= 1
while(i<=30){
    if (i%3==0 && i%5==0)
        console.log("FizzBuzz")
    else if (i%5==0)
        console.log("Buzz")
    else if (i%3==0)
        console.log("Fizz")
    else
        console.log(i)
    i++
}
