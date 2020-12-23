function lookForKey( arr ){
    let result = "not found";

    for ( let i = 0; i < arr.length; i++ ) {
        if( arr[i] == "key" ){
            console.log( "Key found.");
            result = "Key found";
        } else if( Array.isArray( arr[i] ) ){
            result = lookForKey( arr[i] );
        }
    }

    return result;
}

let arr = [
    ["stuff", "things"],
    ["stuff", "things"],
    ["stuff", "things", "key"]
];

console.log( lookForKey( arr ) );