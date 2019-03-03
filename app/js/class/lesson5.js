// 二进制和八进制
{
    console.log(0b1101); // 13
    console.log(0o37); // 31
}

{
    console.log(Number.isFinite(10)); // true
    console.log(1/0, Number.isFinite(1/0), Number.isFinite(Infinity)); // Infinity false false
    console.log(Number.isFinite(NaN)); // false

    console.log(Number.isNaN(NaN)); // true
    console.log(Number.isNaN(1)); // false
}

{
    console.log(Number.isInteger(12), Number.isInteger(12.0)); // true true
    console.log(Number.isInteger(12.2)); // false
}

{
    console.log(Number.MAX_SAFE_INTEGER); //  9007199254740991
    console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
    console.log(Number.isSafeInteger(1)); // true
    console.log(Number.isSafeInteger(9007199254740992)); // false
}

// 获取小数的整数部分
{
    console.log(Math.trunc(5.3)); // 5
    console.log(Math.trunc(-4.7)); // -4
}

// 判断正负数
{
    console.log(Math.sign(-2), Math.sign(2), Math.sign(0), Math.sign(-0)); // -1 1 0 -0
    console.log(Math.sign('-2'), Math.sign('a')); // -1 NaN
}

{
    console.log(Math.cbrt(27)); // 3 // 立方根
}