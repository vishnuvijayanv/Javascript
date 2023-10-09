gp='global'
console.log('${gp}');

parent=()=>{
    let p='parent'
    console.log('${p}');

    const child=()=>{
        let c='child'
        console.log('${c}');

    }
    child()

}
parent()

















//w.a.p to check the given number if phone number or not

j=0
mobnum=(mn)=>{
    while (mn>0) {
        j++ 
       mn=parseInt(mn/10)  
       //   console.log(num);  
       }
       if (j==10) {
        console.log("MOBILENUMBER");
       }
       else
       console.log("not");
}
mobnum(1234567890)




console.log('-------------------------');


const num=(ph)=>{
    hn=ph.length
    console.log((hn==10?'phone number':'not'));
}
num('9456123321')


//w.a.p to find given mail is gmail or not

const m=(mail)=>{
    str=mail
    if (str.endsWith('@gmail.com')) {
        console.log('gmail');
        
    }
    else{
        console.log('not');
    }
}
    m('v@gmail.com')



    //w.a.p to print wheather a word starts with q or not


    const word=(str1)=>{
        console.log(str1.startsWith('q')?'starts with q':str1.startsWith('Q')?'starts with q':'not start with q');
    }
    word('Queen')


