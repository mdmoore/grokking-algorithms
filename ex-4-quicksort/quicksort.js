function quickSort( arr ) {

    if ( arr.length <= 1 ) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for ( let i = 0; i < arr.length - 1; i++ ) {
        if ( arr[i] < pivot ) {
            leftArr.push( arr[i] );
        } else {
            rightArr.push( arr[i] );
        }
    }
    
    return [...quickSort( leftArr ), pivot, ...quickSort( rightArr )];

}

let arr = [17, 45, 32, 95, 234, 38, 55, 363, 71];
console.log( quickSort( arr ) );