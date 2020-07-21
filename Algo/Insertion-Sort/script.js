let InsertionSort = (arr) => {
    for (let i = 1; i <arr.length; i++) {
        let indexI = arr[i];
        let j = i - 1;         
            while (j >= 0 && arr[j] > indexI) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
        arr[j + 1] = indexI;
}};

let arr = [2,1, 5, 9, 4, 3]
InsertionSort(arr)
console.log(arr)