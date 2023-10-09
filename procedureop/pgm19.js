// //Nested loop

// //#  #  #  #
// //#  #  #  #
// //#  #  #  #
// //#  #  #  #


// for(row=1;row<=4;row++){
//     str=''
//     for(col=1;col<=4;col++){
//         str=str+' #'
//     }
//     console.log(str);
  

// }


// console.log('---------------------------------------');



// //1 1 1 1
// //2 2 2 2
// //3 3 3 3
// //4 4 4 4



// for(row=1;row<=4;row++){
//     str=''
  
//     for(col=1;col<=4;col++){
//         str=str+ row+' '
       
//     }
//     console.log(str);
  

// }

// console.log('---------------------------------------');


// //1234
// //1234
// //1234
// //1234


// for(row=1;row<=4;row++){
//     str=''
//     for(col=1;col<=4;col++){
//         str=str+col+' '
       
//     }
//     console.log(str);
// }

// console.log('---------------------------------------');
// //*
// //* *
// //* * *
// //* * * *


// for(row=1;row<=4;row++){
//     str=''
//     for(col=1;col<=row;col++){
//         str=str+' *'
//     }
//     console.log(str);
  

// }


// console.log('---------------------------------------');

// //1
// //2 2
// //3 3 3
// //4 4 4 4 


// for(row=1;row<=4;row++){
//     str=''
//     for(col=1;col<=row;col++){
//         str=str+row+' ' 
//     }
//     console.log(str);
  

// }


// console.log('---------------------------------------');


// //1
// //1 2
// //1 2 3
// //1 2 3 4



// for(row=1;row<=4;row++){
//     str=''
//     for(col=1;col<=row;col++){
//         str=str+col+' ' 
//     }
//     console.log(str);
  

// }



console.log('---------------------------------------');


//       *
//     *  *
//   *  *  *
// *  *  *  *   




for(row=1;row<=4;row++){
    str=''
    for(sp=4;sp>row;sp--){
        str=str+' '
    }
        for(col=1;col<=row;col++){
            str=str+' *'
        }
        
        console.log(str);
    }
  




    console.log('---------------------------------------');

// * * * *
// * * *
// * *
// *



for(row=1;row<=4;row++){
    str=''
    for(col=4;col>=row;col--){
        str=str+' *'
    }
    console.log(str);
  

}

console.log('---------------------------------------');

// 4 3 2 1 
// 4 3 2
// 4 3
// 4




for(row=1;row<=4;row++){
    str=''
    for(col=4;col>=row;col--){
        str=str+col+' ' 
    }
    console.log(str);
  

}






console.log('---------------------------------------');
//*
//* *
//* * *
//* * * *
//* * * * * 
//* * * *
//* * *
//* *
//*



for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+' *'
    }
       console.log(str);
  

}
for(r=1;r<=4;r++)
{
   str1=''

for(cl=4;cl>=r;cl--){
   str1=str1+' *'

}
console.log(str1);
}




console.log('---------------------------------------');


//         *      
//       *   *
//     *       *
//   * * * * * * *


for(row=1;row<=4;row++){
    str=' '
    
    for(col=1;col<=7;col++){
        if (row+col==5 || col-row==3 || row==4) {
            str=str+' *'
             
        }
        else{
           
                str=str+'  '
         }
    

        }
        console.log(str);

    }
    