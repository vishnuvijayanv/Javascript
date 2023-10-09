//w.a.p to check the given number is amstrong or  not


// num=1634
// rev=0
// rem=0
// a=0
// temp=num
// temp1=num
// ams=0
// while(num>0){
//     a++
//     num=parseInt(num/10)
// }
// while (temp>0) {
//     rem=temp%10
//     rev=rev*10+rem
//     ams=(rem**a)+ams
//     temp=parseInt(temp/10)
    
// }
// console.log(ams);
// if (ams==temp1) {
//     console.log('amstrong  number');
    
// }
// else{
//     console.log('not an amstrong number');
// }
 



num=153
temp=num
sum=0
rem=0
while (num>0) {
    rem=num%10
    sum=sum+(rem**3)
    num=parseInt(num/10)
    
}
if (temp==sum) {
        console.log('amstrong  number');
        
     }
     else{
         console.log('not an amstrong number');
     }



