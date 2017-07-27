# HeapSort

index.html visualises how Heap Sort works in general

algorithm.js is a possible Javascript implementation

## Basic idea
Heap Sort is part of the family of tree sort algorithms.
The trick is to not create a tree but to interprete a linear array as tree.
The word 'heap' has nothing to do with memory storage here.

Element at index 0 has children at index 1 and index 2,  
element at index 1 has children at index 3 and index 4,  
element at index 2 has children at index 5 and index 6 etc.

That leads to general expression  
Element at index x has children at index (2 * x + 1) and index (2 * x + 2)  
while element at index (2 * x + 2) potentially not exists.
