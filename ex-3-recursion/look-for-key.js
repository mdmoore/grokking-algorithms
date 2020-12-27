function lookForKey( arr ){
    for ( let i = 0; i < arr.length; i++ ) {
        if( arr[i] == "key" ){
            return true;
        } else if( Array.isArray( arr[i] ) && lookForKey( arr[i] ) ) {
            return true;
        } 
    }

    return false;
}

let arr = [
    ["foo"],
    ["key"]
  ];

console.log( lookForKey( arr ) );