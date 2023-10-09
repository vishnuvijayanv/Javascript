text="hai hello all  hello world"
//w.a.p  to print the word count from the given text
// s=text.split(' ')
// console.log(s);
// obj={}
// for ( i of s) {
//     console.log(i);
//     c=0
// for ( j of s) {
//     console.log(j);
//        if(i==j)
//         c++
// }
//  obj[i]=c
// }
// console.log(obj)








// another method


//array from string
// a=text.split(' ')
// console.log(a);
// //empty object
// obj={}
// for (const i of a) {
//     if (i in obj) {
//         //if item present then count increase
//         obj[i]+=1
        
//     }
//     else{
//         //else count=1
//         obj[i]=1
//     }
    
// }
// console.log(obj);

//using array method
obj={}
a=text.split(' ').forEach(item => item in obj?obj[item]+=1:obj[item]=1);
console.log(obj);
// console.log(a);




