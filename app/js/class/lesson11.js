// map-arr
{
    let map = new Map();
    let arr = [];
    //增
    map.set('t', 1);
    const element = { t: 1 };
    arr.push(element);
    console.log(map, arr); // Map(1) {"t" => 1} [{t: 1}]

    //查
    console.log(map.has('t'), arr.includes(element)); // true true

    //改
    map.set('t', 2);
    arr.forEach(item => {
        if(item.t){
            item.t=2;
        }
    })
    console.log(map, arr); // Map(1) {"t" => 2} [{t: 2}]

    //
    map.delete('t');
    let index = arr.findIndex(item => item.t);
    arr.splice(index, 1);
    console.log(map, arr); // Map(0) {} []
}

// set-arr
{
    let set = new Set();
    let arr = [];
    //增
    set.add({t: 1});
    arr.push({t: 1});
    console.log(set, arr); // Set(1) {{…}} [{…}]
    //查
    let set_exist = set.has({t: 1});
    let array_exist = arr.includes({t: 1});
    console.log(set_exist, array_exist); // false false
    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    arr.forEach(item => item.t ? item.t = 2 : '');
    console.log(set, arr);
    //删
    set.forEach(item => {
        item.t ? set.delete(item) : ''
    });
    arr.splice(0, 1);
    console.log(set, arr);
}

// map, set, object
{
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;
    console.info(map, set, obj); // Map(1) {"t" => 1} Set(1) {{…}} {t: 1}

    //查
    console.log({
        map_exist: map.get('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    }); // {map_exist: 1, set_exist: true, obj_exist: true}
    
    //改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.log(map, set, obj); // Map(1) {"t" => 2} Set(1) {{…}} {t: 2}

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log(map, set, obj); // Map(0) {} Set(0) {} {}
}
// 推荐优先使用 map 和 set, 替代传统的 数组 和 Object