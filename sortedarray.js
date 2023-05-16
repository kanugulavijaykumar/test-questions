
const array = [

    {min: 1, max: 12},
   
    {min: 1, max: 2},
   
    {min: 0, max: 1},
   
    {min: 12, max: 24},
   
    {min: 6, max: 22},
   
    ]

    const result  = array.sort((a,b) => {
       return  b.max-a.max
    })
    console.log(result)