//Exercise 4.4
//Recursive Binary Search

function binarySearch( arr, val ) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor( ( low + high ) / 2 );

    if ( arr[mid] === val ) {
        return "Found - " + arr[mid];
    }

    if ( arr[0] === arr[high] ) {
        return "Not found";
    }

    if ( arr[mid] > val ) {
        return binarySearch( [...arr.slice(0, mid)], val ); // rerun search with lower half of array
    } else {
        return binarySearch( [...arr.slice(mid + 1)], val ); // rerun search with higher half of array
    }
}

let arr = [17, 45, 32, 95, 234, 38, 55, 363, 71];

//binary search requires a sorted list
let sorted = arr.sort( function( a,b ){
    return a - b;
});

let result = binarySearch( sorted, 32 );
console.log( result );
