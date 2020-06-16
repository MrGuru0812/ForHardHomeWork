'use strict'

let arr = ['21', '44', '50', '323', '59', '72', '209'];

arr.forEach(function callback(element){

    if(element[0] === '2' || element[0] === '4' ) {

        console.log(element);

    }

});

let n = 100;

followingExample:
for (let i = 2; i <= n; i++) { 

    for (let j = 2; j < i; j++) { 
        if (i % j === 0) continue followingExample; 
    }

    console.log(i +' делители этого числа 1 и '+ i );
}


