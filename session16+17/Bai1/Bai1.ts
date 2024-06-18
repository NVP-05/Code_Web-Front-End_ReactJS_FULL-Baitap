function test2 <T>(val: T|T[]):T[]{
    if(typeof val === "number"){
        return [val]
    }else if(Array.isArray(val)){
        return [val[val.length-1]];
    }else{
        return []
    }
}

console.log(test2(1));
console.log(test2([5, 6, 7, 8, 9]));
console.log(test2(["a", "b", "c"]));