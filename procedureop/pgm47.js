numbers=[[10,20],[50,60],[65,10,2],[[18,14],21,11],[99,2,6]]
//find numbers greater than 50
a=numbers.flat(Infinity)
// console.log(a);
great=a.filter(num=>num>50)
console.log(great);
console.log('--------------------------');
//find the largest number
large=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(large);
console.log('--------------------------');

//find the smallest number
console.log(a.reduce((j,k)=>j<k?j:k));
// small=a.reduce((j,k)=>j<k?j:k)
// console.log(small);
console.log('--------------------------');

// find the total sum
total=a.reduce((n,m)=>n+m)
console.log(total);

