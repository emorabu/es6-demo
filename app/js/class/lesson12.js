import {
    Agent
} from "https";

{
    let obj = {
        time: '2018-03-05',
        name: 'net',
        _r: 123
    };

    let monitor = new Proxy(obj, {
        //读取
        get(target, key) {
            if (typeof target[key] === 'string' && target[key].includes('2018')) {
                return target[key].replace('2018', '2019');
            } else {
                return target[key];
            }
        },
        //设置
        set(target, key, value) {
            // 仅修改 name 属性
            if (Object.is(key, 'name')) {
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        // key in obj
        has(target, key) {
            // 只能获取 name 属性
            if (Object.is(key, 'name')) {
                return target[key];
            } else {
                return false;
            }
        },
        // delete obj[key]
        deleteProperty(target, key) {
            if (key.startsWith('_')) {
                delete target[key];
                return true;
            } else {
                return target[key];
                // return false;
            }
        },
        //拦截 Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
        ownKeys(target, key) {
            return Object.keys(target).filter(item => item != 'time');
        }

    });

    console.log(monitor.time); // 2019-03-05

    monitor.time = '2019';
    console.log(monitor.time); // // 2019-03-05 // 未被修改

    monitor.name = '123';
    console.log(monitor.name); // 123

    console.log('name' in monitor, 'time' in monitor); // true false

    delete monitor.time;
    delete monitor._r;
    console.log(monitor.time, monitor._r); // 2019-03-05 undefined

    console.log(Object.keys(monitor)); // ["name"]
}

console.log('----------------------------------------------');

// Reflect
{
    let obj = {
        time: '2018-03-05',
        name: 'net',
        _r: 123
    };
    console.log(Reflect.get(obj, 'time')); // 2018-03-05

    Reflect.set(obj, 'name', 'hello');
    console.log(obj.name); // hello

    console.log(Reflect.has(obj, 'name'));
}

// 校验
{   // 对象定义与数据校验解耦
    let validator = (target, validator) => {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, Proxy) {
                if (target.hasOwnProperty(key)) {
                    let v = this._validator[key];
                    if (v(value)) {
                        return Reflect.set(target, key, validator);
                    } else {
                        throw new Error(`不能设置${key}的值为${value}`);
                    }
                } else {
                    throw Error(`${key} 不存在!`);
                }
            }
        });
    };
    const personValidators = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val > 18;
        }
    };
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return validator(this, personValidators);
        }
    };
    const person = new Person('zhangsan', 20);
    console.log(person);

    // person.name = 12;
    // console.log(person); //  异常: 不能设置name的值为12
    person.name = 'lisi';
    console.log(person); // Proxy {name: {…}, age: 20}
}