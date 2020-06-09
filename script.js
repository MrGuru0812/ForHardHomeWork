'use strict'

function stringFoo(param) {

if(typeof param === 'string' && param.length > 30 || typeof param === 'string' ) {
        
    console.log(param.slice( 0, 30).trim());
    
    } else {

        console.log('Это не строка');
        
    }

};

stringFoo();

