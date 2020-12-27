function bubbleSort( arr, n = arr.length ) {
    if ( n == 1 ) {
        return arr;
    }

    for (let i = 0; i < n - 1; i++) {
        if( arr[i] > arr[i+1] ) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }

    return bubbleSort( arr, n - 1 );

}

let arr = [1, 98, 25, 64, 342, 916, 17, 200];

console.log( bubbleSort( arr) );