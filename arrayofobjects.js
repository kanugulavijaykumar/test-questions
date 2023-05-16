
const itemsById = {

    12: { id: 12, name: 'Set of 5', hasOffer: true },
   
    23: { id: 23, name: 'Box of 12', hasOffer: true },
   
    31: { id: 31, name: 'Collection of 2', hasOffer: false },
   
    101: { id: 101, name: 'Set of 3', hasOffer: true },
   
    112: { id: 112, name: 'Pair of 2', hasOffer: false },
   
    221: { id: 221, name: 'Box of 10', hasOffer: true },
   
    }
   
   const vk = Object.values(itemsById).filter(result => result.hasOffer===true)
   console.log(vk)
   
    output
   
    const itemsWithOffer = [
   
    { id: 12, name: 'Set of 5', hasOffer: true },
   
    { id: 23, name: 'Box of 12', hasOffer: true },
   
    { id: 101, name: 'Set of 3', hasOffer: true },
   
    { id: 221, name: 'Box of 10', hasOffer: true },
   
    ]