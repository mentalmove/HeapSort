var AMOUNT = 24;                                                                // How many elements?
var LIMIT = 89;                                                                 // All elements have non-negative integer values below LIMIT
                                                                                // Using two-digit-numbers for better reading

/**
 * First line break after one element,
 * second line break after two elements,
 * third line break after four elements,
 * fourth line break after eight elements...
 * 
 * Also calculating leading spaces as well as
 * spaces between elements
 */
function display_as_tree (collection) {
    var complete_array = [[]];
    var line_break = 1;
    var i;
    for ( i = 0; i < collection.length; i++ ) {
        if ( i >= line_break ) {
            complete_array.push([]);
            line_break = 2 * line_break + 1;
        }
        complete_array[complete_array.length - 1].push(collection[i]);
    }
    var space = "  ";
    var pow, start_space, join_space, j;
    for ( i = 0; i < complete_array.length; i++ ) {
        pow = Math.pow(2, complete_array.length - i);
        start_space = "";
        for ( j = 0; j < ((pow / 2) - 1); j++ )
            start_space += space;
        join_space = "";
        for ( j = 0; j < (pow - 1); j++ )
            join_space += space;
        console.log( start_space + complete_array[i].join(join_space) );
    }
}

/**
 * For creation of collection without duplicates,
 * refer to 'create_indices()' on main page
 */
function create_random_array (amount, limit) {
    var a = [];
    for ( var i = 0; i < amount; i++ )
        a.push( Math.floor(Math.random() * limit) + 10 );
    return a;
}

/**
 * For a given index:
 *      - find left child's index
 *      - find right child's index if existent and inside collection
 *      - find left child's index' value
 *      - eventually find right child's index' value
 *      - compare the larger with original index' value
 *      - if original index' value is lower than larger child's index' value:
 *              - swap both values
 *              - call function again with larger child's index
 */
function downheap (index, collection_length) {
    var left_index = 2 * index + 1;
    var right_index = (left_index + 1 < collection_length) ? (left_index + 1) : -1;
    var value = collection[index];
    var left_child = collection[left_index];
    var right_child = (right_index == -1) ? null : collection[right_index];
    var large_index = (left_child >= right_child || right_child === null) ? left_index : right_index;
    var large = collection[large_index];
    if ( value >= large )
        return;
    collection[large_index] = value;
    collection[index] = large;
    if ( large_index < parseInt(collection_length / 2) )
        downheap(large_index, collection_length);
}
/**
 * As long as recognised collection has two or more elements:
 *      - reduce recognised collection length by one
 *      - swap collection's first element with first element behind recognised collection
 *      - repair heap, i.e. call downheap() with first element
 */
function heapsort () {
    var collection_length = collection.length;
    while ( collection_length > 1 ) {
        collection_length--;
        var tmp = collection[collection_length];
        collection[collection_length] = collection[0];
        collection[0] = tmp;
        //console.log( collection.join(" ") );
        //display_as_tree(collection);
        if ( collection_length == 1 )
            break;
        downheap(0, collection_length);
    }
}
/**
 * Assumption: The collection is already a heap
 * but needs to be repaired
 * 
 * Starting with last element having children, reverse iterating to first element:
 *      - repair heap, i.e. call downheap() with respective element
 */
function build_heap (index) {
    for ( var i = index; i >= 0; i-- ) {
        downheap(i, collection.length);
        //console.log( collection.join(" ") );
        //display_as_tree(collection);
    }
}

/**
 * Some random values
 */
var collection = create_random_array(AMOUNT, LIMIT);

/**
 * Display input collection as array and as tree
 */
console.log( "Unsorted:" );
console.log( "\t" + collection.join(" ") );
console.log( "Read as tree:" );
display_as_tree(collection);
console.log( "" );

/**
 * Sort partially by building a heap
 */
var highest_index_with_children = parseInt(collection.length / 2) - 1;
build_heap(highest_index_with_children);
console.log( "Transformed to a heap (i. e. partially sorted):" );
console.log( "\t" + collection.join(" ") );
display_as_tree(collection);
console.log( "" );

/**
 * It is known that first heap element is always the largest
 * Pushing this element to the end and re-building the heap
 * 
 * Display result as tree and as array
 */
heapsort();
console.log( "After Heap Sort:" );
console.log( "\t" + collection.join(" ") );
display_as_tree(collection);
