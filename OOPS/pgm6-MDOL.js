//method overloading

// class A{
//     methoda(){
//         console.log("inside first method");
//     }
//     methoda(n){
//         this.n1=n
//         console.log("inside second method",n1);
//     }
// }

// obj=new methoda()
// obj.methoda()
// obj.methoda(3)


//using spread operator


function add(...arg){
    console.log(arg);
    console.log("sum",arg.reduce((n1,n2)=>n1+n2));
}
add(10,20)