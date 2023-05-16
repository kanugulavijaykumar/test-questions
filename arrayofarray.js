// ** Method-1 **


const input1 = [

    [1, 2, 3, 4],
   
    [5, 6, 7, 8],
   
    [9, 10, 11, 12]
   
    ]

    function result(input){
        var arr = []
        for(var i=0; i<input.length;++i)
        {
            for(var j=0;j<input[i].length;++j)
            {
                if(input1[i][j] === undefined){
                    return;
                }
                if(arr[j] === undefined){
                    arr[j] = [];
                }
                arr[j][i] = input1[i][j]
            }
        }
        return arr
    }

console.log(result(input1))








// ** Method-2 **


const array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
   ];
   const row = array.length;
   const col = array[0].length;
   const maxLen = Math.max(row, col);
   console.log({ row, col })
   const output = [];
   for (let i = 0; i < maxLen; i++) {
    let result = array.reduce((acc, item) => {
    if (item && item.length && item[i]) {
    acc.push(item[i])
    }
    return acc;
    }, [])
    if (result.length) {
    output.push(result);
    }
   }
   console.log(output)