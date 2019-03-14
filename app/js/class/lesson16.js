{
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c';
    };
    let f = tell();
    console.log(f.next()); // {value: "a", done: false}
    console.log(f.next()); // {value: "b", done: false}
    console.log(f.next()); // {value: "c", done: true}
    console.log(f.next()); // {value: undefined, done: true}
    // next() 类似 iterator 的 next()
}

// 自定义遍历器
{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    for(let item of obj){
        console.log(item); // 1 2 3
    }
}

// 状态机
{
    let state = function*() {
        while(1){
            yield 'a';
            yield 'b';
            yield 'c';
        }
    };
    let status = state();
    console.log(status.next()); // {value: "a", done: false}
    console.log(status.next()); // {value: "b", done: false}
    console.log(status.next()); // {value: "c", done: false}
    console.log(status.next()); // {value: "a", done: false}
    console.log(status.next()); // {value: "b", done: false}
    console.log(status.next()); // {value: "c", done: false}
}

/*
// 不要执行, 会占用大量cpu资源
// babel 需要插件才能支持
{
    let state = async function() {
        while(1){
            await 'a';
            await 'b';
            await 'c';
        }
    };
    let status = state();
    console.log(status.next()); // {value: "a", done: false}
    console.log(status.next()); // {value: "b", done: false}
    console.log(status.next()); // {value: "c", done: false}
    console.log(status.next()); // {value: "a", done: false}
    console.log(status.next()); // {value: "b", done: false}
    console.log(status.next()); // {value: "c", done: false}
} 
*/

{
    let draw = function(count) {
        console.log(`剩余${count}次`);
        // 抽奖逻辑
    };
    let limit = function* (count) {
        while(count>0) {
            count--;
            yield draw(count);
        }
    };
    let start = limit(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.querySelector('#start').addEventListener('click', function(){
        start.next();
    });
}

// 长轮询
{
    let ajax = function*() {
        yield new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve({
                    code:0
                });
            }, 2000);
        })
    };
    let pull = function() {
        let generator = ajax();
        let step = generator.next();
        step.value.then(function(val) {
            if (val.code != 0) {
                setTimeout(() => {
                    console.log('wait');
                    pull();
                }, 1000);
            } else {
                console.log(val);
            }
        });
    };

    pull();
}