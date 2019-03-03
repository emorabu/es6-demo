{
    let arr = Array.of(2, 5, 3, 4);
    console.log(arr); //  [2, 5, 3, 4]
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    console.log(p, pArr); // NodeList(3) [p, p, p]  (3) [p, p, p]
    
    for(let item of pArr){
        console.log(item.textContent); // hello js es6
    }
    p.forEach(function(item){
        console.log(item.textContent); // hello js es6
    })
}

{
    console.log(Array.from([1, 3, 5], function(item) {
        return item * 2;
    })); // [2, 6, 10]
    console.log([1, 3, 5].map(function(item) {
        return item * 2;
    })); //  [2, 6, 10]
}

{
    console.log([1, 2, undefined].fill(4)); //  [4, 4, 4]
    console.log([1, 2, undefined].fill(7, 1, 2)); //  [1, 7, 7] // 参数: 替换为, 起始索引, 结束索引(不含)
}

{
    const arr = [1, 2, 4];
    for(let i of arr.keys()){
        console.log(i); // 0 1 2
    }
    for(let i of arr.values()){
        console.log(i); // 1 2 4
    }
    for(let [index, value] of arr.entries()){
        console.log(index, value);
        // 0 1
        // 1 2
        // 2 4
    }
}

{
    const arr = [1, 2, 3, 4, 5].copyWithin(0, 2, 4);
    console.log(arr); //  [3, 4, 3, 4, 5] // 将索引 2 和 3 位置的元素 3 4 从 0 开始替换
}

{
    console.log([1, 2, 3, 7, 5].find(function(item) {
        return item > 3;
    }));// 7 // 返回第一个符合条件的元素
    console.log([1, 2, 3, 7, 5].findIndex(function(item) {
        return item > 3;
    }));// 3 // 返回第一个符合条件的元素索引

    console.log([1, 2, NaN].includes(2)); // true
    console.log([1, 2, NaN].includes(NaN)); // true
}