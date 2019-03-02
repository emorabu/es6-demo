{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('XYZ123'), regex2.test('XYZ123')); // true true

    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags); // i // 以第二个参数为准,即第二个参数将第一个的修饰符覆盖了
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y; // y 也是全局匹配, 只从上次匹配到的下一个字符开始匹配(没有则从头匹配)
    console.log('1:'+a1.exec(s), '2:'+a2.exec(s)); // 1:bbb 2:bbb
    console.log('1:'+a1.exec(s), '2:'+a2.exec(s)); // 1:bb 2:null
    console.log('1:'+a1.exec(s), '2:'+a2.exec(s)); // 1:b 2:bbb

    console.log(a1.sticky, a2.sticky); // false true // 是否为粘连模式
}

{
    console.log('u1:', /^\uD83D/.test('\uD83D\uDC2A')); // u1: true
    console.log('u2:', /^\uD83D/u.test('\uD83D\uDC2A')); // u2: false // u 可以准确识别大于 0xFFFF 的 Unicode 字符.

    console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true // u 会将 \u{61} 视为一个字符

    console.log('\u{20BB7}'); // 𠮷

    let s = '𠮷';
    console.log(/^.$/.test(s)); // false
    console.log(/^.$/u.test(s)); // true
    console.log(/𠮷{2}/.test('𠮷𠮷')); // false
    console.log(/𠮷{2}/u.test('𠮷𠮷')); // true
}2