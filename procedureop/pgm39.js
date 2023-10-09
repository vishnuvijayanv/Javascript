//Array methods-map()

a=[10,11,12,13,14,15]

//w.a.p to print a new array  having the squares of the given numbers

sq=a.map(num=>num**2)
console.log(sq);
console.log('-----------------------------------------------------');


//w.a.p to print a new array having the cubes of the given numbers

cube=a.map(num=>num**3)
console.log(cube);
console.log('-----------------------------------------------------');


//w.a.p to print a new array having numbers <=13 then increment  or >=13 then decrement the numbers

b=a.map(num=> num<=13?num+1:num-1)
console.log(b);
console.log('-----------------------------------------------------');