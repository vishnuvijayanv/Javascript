for(row=3;row<=5;row++){
    str=''
    for(sp=6;sp>row;sp--){
        str=str+' '
    }
        for(col=1;col<=row;col++){
            str=str+' *'
        }
        
        console.log(str);
    }
num=0
for(row1=1;row1<=9;row1++){
    str1=''

    for(sp=1;sp<=row1;sp++){
        str1=str1+' '
    }
        for(col1=9;col1>=row1;col1--){
            if(row1%2==1){
         
                num++
    
                str1=str1+' *'
    
              }
           
        }
        
        console.log(str1);
    }
  