let arr = [17, 45, 32, 95, 234, 38, 55, 363, 71];

function binarySearch( arr, val ){
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while ( low <= high ) {
        mid = Math.floor( ( low + high ) / 2 );
        if ( arr[mid] === val) {
            return arr[mid];
        } else if ( val > arr[mid] ){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return null;

}


//binary sort requires a sorted list
let sorted = arr.sort( function( a,b ){
    return a - b;
});

let result = binarySearch( sorted, 32 );
console.log( result );

