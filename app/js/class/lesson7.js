// 默认值
{
    function test(x, y = 'world') {
        console.log(x, y);
    }
    test('hello'); // hello world
    test('hello', 'js'); // hello js
}

{
    let x = 2;
    function test2(x, y = x) {
        console.log(x, y);
    }
    test2('hello'); // hello hello
    function test3(q, y = x) {
        console.log(q, y);
    }
    test3('hello'); // hello 2
}

{
    function test4(...args) {
        for (let v of args) {
            console.log(v);
        }
    }
    test4(1, 2, 5, 9); // 1 2 5 9
}

{
    console.log(...[1, 2, 4]); // 1 2 4
}

{
    let arrow = v => v * 2;
    console.log(arrow(3)); // 6

    let arrow2 = () => 1;
    console.log(arrow2()); // 1
}

// 尾调用
{
    function tail(x) {
        console.log('tail' + x);
    }
    function f(x) {
        return tail(x);
    }
    f(123); // tail123
}