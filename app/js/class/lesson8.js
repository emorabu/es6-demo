// 简写
{
    let o = 1;
    let k = 2;
    let es5 = {
        o : o,
        k : k
    };
    let es6 = {o, k};
    console.log(es5, es6); // {o: 1, k: 2} {o: 1, k: 2}

    let es5_method = {
        hello : function(){
            console.log('hello');
        }
    }
    let es6_method = {
        hello() {
            console.log('hello');
        }
    }
    es5_method.hello(); // hello
    es6_method.hello(); // hello
}

// 属性表达式
{
    let a = 'b';
    let es5_obj = {
        a : 'c'
    };
    let es6_obj = {
        [a] : 'c'
    };
    console.log(es5_obj, es6_obj); // {a: "c"} {b: "c"}
}

// 是否严格相等
{
    console.log(Object.is('abc', 'abc')); // true
    console.log(Object.is([], [])); // false
    console.log(Object.is(NaN, NaN)); // true
}

// 浅拷贝, 自身对象属性(不拷贝继承属性), 不拷贝不可枚举的属性
{
    console.log(Object.assign({a : 'a'}, {b: 'b'})); // {a: "a", b: "b"}
}

{
    let test = {k: 123, o: 456};
    for(let [key, value] of Object.entries(test)){
        console.log(key, value);
        // k 123
        // o 456
    }
}

//扩展运算符 (ES2018, babel还不支持, 但Chrome最新版已支持)
{
/*      
 let {a, b, ...c} = {
        a: 'test',
        b: 'kill',
        c: 'ddd',
        d: 'ccc'
    };
    console.log(c);
    {
        c: 'ddd',
        d: 'ccc'
    }
*/

}