console.log("---------- Find min-max in array ----------");
let firstArray = [-5,0,5, 1051,42]
let lowestNumber = 0;
let highestNumber = 0;

for(let i =0;i < firstArray.length;i++){
    if(firstArray[i] > highestNumber){
        highestNumber = firstArray[i];
    }else if(firstArray[i] < lowestNumber){
        lowestNumber = firstArray[i]
    } 
}

console.log("lowest :",lowestNumber,"highest :",highestNumber)

console.log("---------- Merge + sort data in arrays ----------");

let firstGroup = [2,42,6,3,80,0];
let secondGroup = [5484,-45,-5,454];
let combinedArray = [];

combinedArray.push(...firstGroup,...secondGroup);


const mergeArray = combinedArray => {
    for(let i=0; i < combinedArray.length;i++){
        for(let j=0; j < combinedArray.length-1;j++){
            if(combinedArray[j] > combinedArray[j+1]){
                [combinedArray[j], combinedArray[j+1]] = [combinedArray[j+1],combinedArray[j]];
            }
        }
    }
    return combinedArray;
};

mergeArray(combinedArray);
console.log(combinedArray)