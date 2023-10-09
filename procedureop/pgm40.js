//array method -reduce()

a=[1,2,3,4,5,6,7]
//find the highest
h=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log('highest',h);
console.log('------------------------------');
//find the lowest
h
l=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log('lowest',l);
console.log('------------------------------');

//find the total sum
sum=a.reduce((num1,num2)=>num1+num2)
console.log('sum',sum);
console.log('------------------------------');
