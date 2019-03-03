{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(Object.is(a1, a2)); // false

    let a3 = Symbol('a3');
    let a4 = Symbol('a3');
    console.log(Object.is(a3, a4)); // false

    let a5 = Symbol.for('a5');
    let a6 = Symbol.for('a5');
    console.log(Object.is(a5, a6)); // true
}

{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    };
    console.log(obj); // {abc: 345, c: 456, Symbol(abc): "123"}

    for(let [key, value] of Object.entries(obj)){
        console.log(key, value);
        // abc 345
        // c 456
    }
    console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(abc)]

    console.log(Reflect.ownKeys(obj)); // ["abc", "c", Symbol(abc)]
}