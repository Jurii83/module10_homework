const arr = [ 5, 1, 4, 2, 3, 7, 5, 5 ];
 
const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
const duplicates = findDuplicates(arr);
console.log(duplicates);