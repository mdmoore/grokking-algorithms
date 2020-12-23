//Exercise 4.3
//Find max number in a list with recursion

function findMax( arr ) {
    if ( arr.length === 1 ) {
        return arr[0];
    }

    if ( arr.length === 2 ) {
        return ( arr[0] > arr[1] ) ? arr[0] : arr[1];
    }

    const subMax = findMax( arr.slice( 1 ) );
    console.log(subMax);
    return ( arr[0] > subMax) ? arr[0] : subMax;

}

let arr = [12,53,723,64,234,57,9,532];

console.log( findMax( arr ) );