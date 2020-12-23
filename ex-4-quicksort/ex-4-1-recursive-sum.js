//Exercise 4.1
//Sum all elements in an array with a recursive function

function sum( arr ) {
    if ( arr.length <= 0) {
        return 0;
    }

    return arr[0] + sum( arr.slice(1, arr.length ));
}

console.log(sum([1,2,3]));