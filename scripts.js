// sumZero UNSORTED 

let unsortedArray = [11,30,-1,4,3,9,-2,-1,0,-3,8,4,5,6];
let answer = [];
function sumZero(arr) {
  for(let i = 0; i <= unsortedArray.length -1; i++){
    for(let j = 0; j <= unsortedArray.length-1; j++){
        if (unsortedArray[i] + unsortedArray[j] !== 0){
        continue;
      }
        if (unsortedArray[i] + unsortedArray[j] === 0){
            answer = [unsortedArray[i], unsortedArray[j]];
            return answer;
        }
    }  
}
return undefined; 
}
                          
console.log(sumZero(unsortedArray));

// Big(O) above is n^2 




// Sorted Array Solution

let array = [-6,-3,-2,-1,0,3,4,5,8,9]
arr0 = []
function sumZero(array) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
    if (array[i] + array[j] > 0){
        j--;
    }
    if (array[i] + array[j] < 0){
        i ++;
    }
    if (array[i] + array[j] === 0 && i!=j) {
        arr0 = [array[i], array[j]];
        return arr0
    }
    }
    return undefined
}
console.log(sumZero(array))

//Big(O) above is n 