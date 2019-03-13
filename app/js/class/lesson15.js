{
    let arr = ['hello', 'world'];
    let map = arr[Symbol.iterator]();
    console.log(map.next()); // {value: "hello", done: false}
    console.log(map.next()); // {value: "world", done: false}
    console.log(map.next()); // {value: undefined, done: true}
}

// 自定义iterator
{
    let obj = {
        start: [1, 3, 2],
        end: [7, 4, 1],
        [Symbol.iterator](){
            let arr = this.start.concat(this.end);
            let len = arr.length;
            let index = 0;
            return { // 返回对象, 对象中只有一个 next(), next() 的返回值为 {done, value}
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    };
    for(let item of obj){
        console.log(item); // 1 3 2 7 4 1
    }
}

{
    let arr = ['hello', 'world'];
    for(let item of arr) {
        console.log(item); // hello world
    }
}