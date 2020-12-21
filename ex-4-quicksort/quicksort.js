function quickSort( arr ) {

    if ( arr.length < 2 ) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if ( arr[i] < pivot ) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    if ( leftArr.length > 0 && rightArr.length > 0 ) {
        return [...quickSort( leftArr ), pivot, ...quickSort( rightArr )];
    } else if ( leftArr.length > 0 ) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort( rightArr )];
    }

}

let arr = [17, 45, 32, 95, 234, 38, 55, 363, 71];
console.log( quickSort( arr ) );