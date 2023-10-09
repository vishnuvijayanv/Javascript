accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts

console.log(accounts.length);
console.log('-------------------------------------');

//2. print account number whose ac_type is savings
for (const i of accounts) {
    if(i.ac_type=="savings"){
        console.log(i.acno);
    }    
}
accounts.filter(data=>data.ac_type=="savings").forEach(items=>console.log(items.acno))

console.log('-------------------------------------');

//3.print the balance of accnount number 1000
accounts.filter(data=>data.acno=="1000").forEach(items=>console.log(items.balance))
console.log('-------------------------------------');


//4. print all gpay transactions



for (const i of accounts) {
    transaction1=i.transaction
    for (const j of transaction1) {
        if(j.mode=='gpay'){
         console.log(j);

        }  
    }
    
}
accounts.map(data=>data.transaction).flat().filter(a=>a.mode=="gpay").forEach(item=>console.log(item))
console.log('-------------------------------------');

//5. print all transaction whose amount > 5000
accounts.map(data=>data.transaction).flat().filter(a=>a.amount>5000).forEach(item=>console.log(item))
console.log('-------------------------------------');


 
//6. print credit transaction of account 1002


c=accounts.map(data=>data.transaction).flat().filter(a=>a.to==1002).forEach(item=>item)
console.log(c);
console.log('-------------------------------------');

//7. print debit transaction of account 1002

d=accounts.find(data=>data.acno==1002).transaction
console.log(d);
console.log('-------------------------------------');

//8. print transaction history of 1002
obj={
    credit:c,
    debit:d
}

console.log('-------------------------------------');



//9. print highest balance account details
high=accounts.reduce((a,b)=>a.balance>b.balance?a:b)
console.log(high);