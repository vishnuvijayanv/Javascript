//FOR LOOP

//w.a.p to display from 1 -10 using for loop,10-1
//factorial
//prime or not


for(i=1;i<=10;i++){
    console.log(i);
}

console.log('-----------------------------------');



for(i=10;i>=1;i--){
    console.log(i);
}

console.log('-----------------------------------');

console.log('FACTORIAL');

fact=1
n=4
for(i=1;i<=n;i++)
{
    fact=fact*i
}
console.log(fact);

console.log('-----------------------------------');



console.log('PRIME NUMBER');

n=4
count=0
for(i=0;i<=n;i++){
    ans=n%i
    if (ans==0) {
     count++
        
    }
}
if(count==2){
    console.log('prime');

}
else{
    console.log('not prime');
}



console.log('-----------------------------------');

console.log('GCD/HCF');
n1=10
n2=15
gcd=0
for(i=1;i<=n1&&i<=n2;i++){
    if (n1%i==0 && n2%i==0) {
        gcd=i
        
    }    
}
console.log(gcd);
console.log('-----------------------------------');




