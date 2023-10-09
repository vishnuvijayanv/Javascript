//string methods-split

sentance='good evening all'
//print all vowels from the given string

// a=sentance.split('')
// console.log(a);
// j=a.filter(i=>i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
// console.log(j);


vowels=['a','e','i','o','u']
// character=sentance.split('')
// for (const char of character) {
//     if (vowels.includes(char)) {
//         console.log(char);
        
//     }
    
// }


Array.from(sentance).filter(i=>vowels.includes(i)).forEach(item=>{console.log(item);})
