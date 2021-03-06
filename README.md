# HeapSort

**index.html** visualises how *Heap Sort* works in general

**algorithm.js** is a possible Javascript implementation

## About heaps
Heap Sort is part of the family of tree sort algorithms.
The trick is to not create a tree but to interprete a linear array as tree.
The word 'heap' has nothing to do with memory storage here.

Element at *index 0* has children at *index 1* and *index 2*,  
element at *index 1* has children at *index 3* and *index 4*,  
element at *index 2* has children at *index 5* and *index 6* etc.

That leads to general expression  
Element at *index x* has children at *index (2 * x + 1)* and *index (2 * x + 2)*  
while element at *index (2 * x + 2)* potentially not exists.

A tree is called a heap when all children are not greater than their parents.

## Create a heap
Each parent having a child greater than itself has to swap its place with its greatest child.  
To create a heap efficiently, one should start with the last element having children
and iterate towards the first element;
if swapping was necessary, the process has to be repeated
with the former parent (now placed at index of the formerly greatest child).

When ready, the array is partially sorted.

## Sort a heap
The first element in a heap is known to be the greatest of the complete collection.
It must swap its place with the last element; after that, the collection's size
will be reduced by one (making the last element untouchable); then potential
violations of the heap rules (caused by the new first element) must be corrected.

This process will be repeated until the touchable collection's size is one.

## Efficiency
Heap Sort uses a lot of steps; it therefore is
relatively slow when used with smaller collections.  
Interestingly, the number of used steps increases only very little
when increasing the number of values to be sorted;
it is a reasonable alternative for large collections.
