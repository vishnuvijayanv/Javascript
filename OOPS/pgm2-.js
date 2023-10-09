class Bank{
    accountDetails={
        1000:{acno:1000,username:"userone",password:"username",balance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:6000}



    }

    //method to validate the given account number
    acval(acno){
        return acno in this.accountDetails?true:false
    }


   
     
    //method to authenticate the given account
    // acval2(acno2,pass2){
    //     this.a=this.accountDetails[acno2]
    //             return acno2 in this.accountDetails?this.a.password==pass2?true:false:"invalid"

    // }


    authac(acno,passwd){
        if (this.acval(acno)) {
            if (this.accountDetails[acno].password==passwd) {
                console.log("authentication successfull");
            }
            else{
                console.log("incorrect password");
            }
            
            
        }
        else{
            console.log("invalid account");
        }
    }
    //method to check the balance of given account

    // acval1(acno1,pass1){
    //     this.a=this.accountDetails[acno1]
    //             console.log(acno1 in this.accountDetails?this.a.password==pass1?`Balnce:${this.a.balance}`:"invalid":"invalid");
    // }






    getbalance(acno,passwd){
        if (this.acval(acno)) {
            if (this.accountDetails[acno].password==passwd) {
                console.log(this.accountDetails[acno].balance);
                
            }

            else{
                console.log("invalid password");
            }


            
        }
        else{
            console.log("invalid account");
        }
    }
    //method for fund transfer between two account

    fundtransfer(fromac,toac,amount){
        if (this.acval(fromac)&&this.acval(toac)) {
            if (this.accountDetails[fromac].balance>=amount) {
                console.log(`initial balance of ${fromac}:${this.accountDetails[fromac].balance} /n initial balance of ${toac}:${this.accountDetails[toac].balance}`);
                this.accountDetails[fromac].balance-=amount
                this.accountDetails[toac].balance+=amount
                console.log(`final balance of ${fromac}:${this.accountDetails[fromac].balance} /n final balance of ${toac}:${this.accountDetails[toac].balance}`);
                
            }
            else{
                console.log("insufficient");
            }

            
        }
        else{
            console.log("invalid ac");
        }
    }
   
}

const user1=new Bank()
    console.log(user1.acval(1000)?"valid":"invalid");
    console.log('-----------------------------');
    
    user1.authac(1000,'username')
    console.log('-----------------------------');


    user1.getbalance(1000,'username')
    user1.fundtransfer(1000,1001,1000)

// const user2=new Bank()
// console.log(user2.acval2(1000 ,"username")?"authentic":"invalid");

// const user3=new Bank()
// user3.acval1(1000 ,"username")


// const user4=new Bank()
// user3.acval(1000 ,"username",1001,1000)




     