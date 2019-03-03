{
    let set = new Set();
    set.add(1);
    set.add(7);
    console.log(set, set.size); // Set(2) {1, 7} 2

    set = new Set([1, 2, 3, 4, 1]);// 初始化, 去重
    console.log(set); // Set(4) {1, 2, 3, 4}

    console.log(set.has(2)); // true
    set.delete(3);
    console.log(set); // Set(3) {1, 2, 4}

    set.clear(); // Set(0) {}
    console.log(set);
}

{
    let set = new Set([1, 3, 5, 7]);
    for(let key of set.keys()){
        console.log(key); // 1 3 5 7
    }
    for(let value of set.values()){
        console.log(value); // 1 3 5 7
    }
    for(let [key, value] of set.entries()){
        console.log(key, value);
        // 1 1
        // 3 3
        // 5 5
        // 7 7
    }
    
    set.forEach(function(item) {
        console.log(item); // 1 3 5 7
    })
}

// WeakSet : 成员只能是对象; 对象是弱引用; 没有 size 和 forEach
{
    let weakSet = new WeakSet();
    let arg = {};
    weakSet.add(arg);
    console.log(weakSet); // WeakSet {{…}}
}

{
    let map = new Map();
    let arr = ['123'];
    map.set(arr, 456);
    console.log(map, map.get(arr)); // Map(1) {Array(1) => 456} 456
}

{
    let map = new Map([
        ['a', 123],
        ['b', 456]
    ]);
    console.log(map, map.size); // Map(2) {"a" => 123, "b" => 456} 2
    console.log(map.delete('a'), map); // true Map(1) {"b" => 456}

    map.clear()
    console.log(map); // Map(0) {}
}

// WeakMap: key 必须为对象或null, 类似 WeakMap
{
    let weakMap = new WeakMap();
    let o = {};
    weakMap.set(o, 2);
    console.log(weakMap.get(o)); // 2
}
