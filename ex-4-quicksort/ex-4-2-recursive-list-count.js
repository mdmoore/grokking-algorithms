//Exercise 4.2
//Count a list of items with recusion

function count( arr ) {
    if ( arr.length <= 0 ) {
        return 0;
    }

    return 1 + count( [...arr.splice(1, arr.length)] );
}

let arr = ["one", "two", "three", "four", "five", "six"];
console.log( count( arr ) );