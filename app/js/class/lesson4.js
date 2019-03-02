{
    console.log('1:','\u{0061}'); // 1: a
    console.log('2:','\u20BB7', '\u{20BB7}'); // 2: ₻7 𠮷
}

{
    let s = '𠮷a';
    console.log(s.length); // 3
    console.log(s.charAt(0), s.charAt(1), s.charAt(2)); // � � a
    console.log( s.codePointAt(0),  s.codePointAt(1),  s.codePointAt(2)); // 134071 57271 97
    console.log( s.codePointAt(0).toString(16),  s.codePointAt(1).toString(16)); // 20bb7 dfb7
}

{
    console.log(String.fromCharCode('0x20bb7')); // ஷ
    console.log(String.fromCodePoint('0x20bb7')); // 𠮷
}

{
    let str = '\u{20bb7}abc';
    // ES5
    for(let i = 0, length = str.length; i<length; i++){
        console.log(str[i]); // � � a b c
    }
    // ES6
    for(let i of str){
        console.log(i); // 𠮷 a b c
    }
}

{
    let str = 'string';
    console.log(str.includes(2), str.includes('t')); // false true
    console.log(str.startsWith('s')); // true
    console.log(str.endsWith('ng')); // true
}

//字符串复制
{
    let str = 'abc';
    console.log(str.repeat(2)); // abcabc 
}

{
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name}, ${info}`;
    console.log(m); // i am list, hello world
}

// 补全
{
    console.log('12'.padStart(5, 0)); // 00012 // 向左补全
    console.log('12'.padEnd(5, 0)); // 00012 // 向右补全
}

// 标签模板
// 一般用于处理前端 XSS 攻击, 多语言转换等
{
    let user = {
        name : 'list',
        info : 'hello world'
    };
    console.log(abc`i am ${user.name}, ${user.info}`); // i am ,, ,listhello world
    function abc(s, v1, v2){
        console.log(s, v1, v2); // ["i am ", ", ", ""] "list" "hello world"
        return s + v1 + v2;
    }
}

{
    console.log(String.raw`hi \n ${1+2}`); // 原样输出
    // hi \n 3
    console.log(`hi \n ${1+2}`);
    // hi 
    // 3
}