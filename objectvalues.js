
const obj = {

    1: { id: 1, name: 'A'},
   
    2: { id: 2, name: 'B'},
   
    3: null,
   
    4: { id: 3, name: 'C' },
   
    5: null,
   
    }

    const result = Object.fromEntries(Object.entries(obj).filter(([key,value]) => value !==null
    ))
    console.log(result)