class Employee{
    //property -variable inside class
    empid
    empName
    empDesg
    empSal
    //constructor0to initialize property
    // instance variable=this

    constructor(id,name,desg,sal){
        this.empid=id
        this.empName=name
        this.empDesg=desg
        this.empSal=sal

    }
    //methods-function inside class
    display(){
        console.log(`emp id :${this.empid} empName:${this.empName} empdesignation:${this.empDesg} empsalary:${this.empSal}`);
    }
}

const emp1=new Employee(100,"max","tester",25000)
emp1.display()

console.log("---------------------------------------------------------");



// student class

class Student{
    sId
    sName
    sBatch
    sPhone
    sAge

    constructor(id,name,batch,phone,age){
        this.sId=id
        this.sName=name
        this.sBatch=batch
        this.sPhone=phone
        this.sAge=age
        this.display()
    }
    display(){
        console.log(`id:${this.sId} name:${this.sName} Batch:${this.sBatch} phone:${this.sPhone} Age:${this.sAge}`);
    }

}

std=new Student(1,"sreehari","MEARN",7306604382,20)
// std.display()

// 