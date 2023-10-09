//Array of objects

weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}


obj={}
for (const i of weatherData) {
    dist=i.district
    console.log(dist);
    temp=i.weather
    console.log(temp);
    if (dist in obj) {
        
        otemp=obj[dist]

        if (otemp>temp) {
            obj[dist]=otemp
            
        }
        else{
            obj[dist]=temp
        }
        
    }
    else{
        obj[dist]=temp
    }
}
console.log(obj);
