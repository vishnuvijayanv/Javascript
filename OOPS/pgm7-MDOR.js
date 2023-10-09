class A{
    methoda(){
        console.log("inside parent");
    }
}
class B extends A{
    methoda(){
        console.log("inside child");
    }
}
obj =new B()
obj.methoda()