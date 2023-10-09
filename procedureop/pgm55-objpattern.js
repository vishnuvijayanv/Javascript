pattern="AABCBBACAA"
//w.a.p to print first recurive letter
obj={}
a=pattern.split('')
for (const i of a) {
    if (i in obj) {
        obj[i]+=1
        console.log(i);
        break;
        
    }
    else{
        obj[i]=1

    }
    
}

