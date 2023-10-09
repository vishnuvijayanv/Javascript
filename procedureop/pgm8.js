//? write a program to check a number is +ve or -ve

num=0

if(num>0){
    console.log('+ve number');
}
else if(num==0){
    console.log('neither +ve nor -ve');
}
else{
    console.log('-ve number');

}


console.log(num>0?'+ve':num==0?'neither +ve nor -ve':'-ve');


//? w.a.p to print the largest among two numbers


num1=10
num2=2
if(num1>num2){
    console.log(`${num1} is greater than ${num2}`);
}
else{
    console.log(`${num2} is greater than ${num1}`);

}


//w.a.p to print the second largest number and also sort the in descending order


a=40
b=400
c=4000
if (a>b&&a>c){
    if(b>c){
        console.log(`${b} is 2nd largest`);
        console.log(`desc order is ${a} ,${b},${c}`);
    }
    else{
        console.log(`${c} is 2nd largest`);
        console.log(`desc order is ${a} ,${c},${b}`);
    }
}
else if(b>a&&b>c){
    if (a>c) {
        console.log(`${a} is 2nd largest`);
        console.log(`desc order is ${b} ,${a},${c}`);
        
    }
    else{
        console.log(`${c} is 2nd largest`);
        console.log(`desc order is ${b} ,${c},${a}`);
    }
}
else if (c>a&&c>b) {
    if (a>b) {
        console.log(`${a} is 2nd largest`);
        console.log(`desc order is ${c} ,${a},${b}`);
        
    }
    else{
        console.log(`${b} is 2nd largest`);
        console.log(`desc order is ${c} ,${b},${a}`);
    }
    
}
else{
    console.log('all are equal');
}








//? w.a.p to print 'fizz' if the number is divisible by 3 . 'BUZZ' if the number is divisible by 5 .'FIZZBUZZ' if the number is divisble by 15



num3=60
if(num3%15==0){
    console.log('FIZZBUZZ');
}
else if(num3%5==0){
    console.log('BUZZ');
}
else if(num3%3==0){
    console.log('FIZZ');
}
else{
    console.log('not divisible');
}

