// Immediatly invoked function expression.

/**
 * Note :- 
 * Many times we face problems because of global scope so to remove global scope pollution we use IIFE.
 * It executes immediatly.
 */

(function chai(){// named IIFE
console.log('database connected');
})();// semicolon is important here

((name)=>{//    
    console.log(`database connection ${name}`);
})('ankur');