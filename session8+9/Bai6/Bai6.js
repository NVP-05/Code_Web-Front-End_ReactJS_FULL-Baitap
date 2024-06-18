"use strict";
function printStringOrArray(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
    else if (Array.isArray(input)) {
        input.forEach(item => console.log(item));
    }
    else {
        throw new Error('Invalid input');
    }
}
printStringOrArray('Hello');
printStringOrArray(['One', 'Two', 'Three']);
