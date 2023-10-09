//w.a.p to display the reverse of a number eg.123-321

num=12345
rev=0
rem=0
console.log(` number:${num}`);
while(num>0){
    rem=num%10
    rev=rev*10+rem
    num=parseInt(num/10)

}
console.log(`reverse:${rev}`);




