let num = 266219;

let arr = num.toString().split(''); 

let product = arr.reduce(function(previousValue, currentItem) { 
    return previousValue * currentItem;
});

let inDegree = product ** 3; 

let arr2 = inDegree.toString().split('');

console.log(product);
console.log(arr2[0]);
console.log(arr2[1]);
