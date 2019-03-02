// 数组
{
    let a, b;
    [a, b] = [1, 2];
    console.log(a, b); // 1 2
}

// 数组-rest参数
{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5];
    console.log(a, b, rest); // 1 2 [3, 4, 5]
}

//对象
{
    let a, b;
    ({a, b} = {a : 1, b : 2});
    console.log(a, b); // 1 2
}

//数组-默认
{
    let a, b, c, d;
    [a, b, c = 3, d] = [1, 2];
    console.log(a, b, c, d); // 1 2 3 undefined
}

// 变量交换
{
    let a = 1,
        b = 2;
    [a, b] = [b, a];
    console.log(a, b); // 2 1
}

//直接从函数返回值赋值
{
    function f() {
        return [1, 2];
    }
    let a, b;
    [a, b] = f();
    console.log(a, b); // 1 2
}

//选择性接收函数返回值
{
    function f() { // 这里的f()和上面的f()经过babel编译后都只在各自的块作用域中
        return [1, 2, 3, 4, 5];
    }
    let a, b;
    [a, , , b] = f();
    console.log(a, b); // 1 4
    [a, , ...b] = f();
    console.log(a, b); // 1 [3, 4, 5]
}

// 对象
{
    let o = {
        p : 42,
        q : true,
    }
    let {p, q} = o;
    console.log(p, q); // 42 true
}

// 对象默认值
{
    let {a = 10, b = 5} = {a : 3};
    console.log(a, b); // 3 5
}

{
    let meta = {
        title : 'abc',
        test : [{
            title : 'test',
            desc : 'desc'
        }]
    };
    let {title : firstTitle, test : [{ title : secondTitle}] } = meta;
    console.log(firstTitle, secondTitle); // abc test
}