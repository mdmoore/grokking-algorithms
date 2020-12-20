function lookForKey( arr ){
    

    for (let i = 0; i < arr.length; i++) {
        if( arr[i] == "key" ){
            console.log( "Key found.");
            //return "Key found.";   - how to return when found?
        } else if( Array.isArray( arr[i] ) ){
            lookForKey( arr[i] );
        }
    }
}

let arr = [
    ["stuff", "things"],
    ["stuff", "things"],
    ["stuff", "things", "key"],
    ["stuff", "things"],
];


console.log( lookForKey( arr ));