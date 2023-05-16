const players = [

    { id: 1, name: 'Tom', age: 22 },
   
    { id: 2, name: 'Toby', age: 23 },
   
    { id: 3, name: 'Mike', age: 30 },
   
   { id: 4, name: 'Luke', age: 22 },

   { id: 5, name: 'John', age: 23 },
   
    { id: 6, name: 'Mark', age: 23 },
   
   { id: 7, name: 'Duke', age: 30 },
   
   ]

   const vk = players.reduce((acc,curr) => {
       if(acc[curr.age])
      {
       let temp = {}
       temp.id = curr.id
       temp.name = curr.name
       temp.age = curr.age
       acc[curr.age].push(temp)
      }
      else if(!acc[curr.id] )
      {
       let temp = {}
       acc[curr.age]=[]
       temp.id = curr.id
       temp.name = curr.name
       temp.age = curr.age
       acc[curr.age].push(temp)
      }
      return acc
    },{})
   console.log(vk)
