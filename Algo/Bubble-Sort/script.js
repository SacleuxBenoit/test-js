const arr = [2, 1, 50, 212, 100]

const BubbleSort = arr => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - (i + 1); j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

BubbleSort(arr)
console.log(arr)