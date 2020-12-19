function findSmallest( arr ){
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if( arr[i] < smallest ){
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;

}

function selectionSort( arr ){
    let sorted = [];

    while ( arr.length > 0 ) {

        let smallest = findSmallest( arr );
        sorted.push( arr[smallest] );
        arr.splice( smallest, 1 );
        
    }

    return sorted;
}

let list = [34, 129, 430, 85, 68, 1050];
console.log(selectionSort(list));