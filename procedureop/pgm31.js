expense=[12000,23000,40000,34000,55000,24000,10000,14000]

//find the lowest expense
//find highest expense
//find total expense
start=expense[0]

for (let n of expense) {
    console.log(n);
    if (start>=n) {
        start=n
        
        
    }

    
}
console.log('lowest',start);


console.log('------------------------------------------------------------------------------');

for (let n of expense) {
    console.log(n);
    if (start<=n) {
        start=n
        
        
    }

    
}
console.log('largest',start);



console.log('-------------------------------------');


sum=0
for (let n of expense) {
    console.log(n);
    sum=sum+n

}
console.log('total=',sum);

