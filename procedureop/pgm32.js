//w.a.p to check wheather 2 is present in the given array

var arr=[10,11,12,3,2,4,56]
num='2'
ispresent=false
for (const n of arr) {
    if (n==num) {
        console.log('2 is present');
        ispresent=true
        break;
    }
}
console.log(ispresent?'present':'notpresent');

console.log('----------------------------------------------------');


inp=[4,5,6]
out=[]
sum=0

for (const a of inp) {
    sum=sum+a
}
console.log(sum);

for (const a of inp) {
    out.push(sum-a);
    
    
}
console.log(out);