import { type } from "os";

{
    let readonly = function(target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    };
    class Test {
        @readonly
        time() {
            return '2019-03-14';
        }
    }
    let test = new Test();
    console.log(test.time()); // 2019-03-14

/*     test.time = function() {
        return '2019-01-01';
    }
    console.log(test.time()); // Uncaught TypeError: Cannot assign to read only property 'time' of object '#<t>'
     */
}

{
    let typeName = function(target, name, descriptor) { 
        target.myName = 'hello'; // // target 为类, 因此 myName 属性为类的静态属性
    }

    @typeName
    class Test {

    }
    console.log(Test.myName); // hello 
}

// 第三方js修饰器库推荐 core-decorators

{
    let log = (type) => {
        return function(target, name, descriptor) {
            let method = descriptor.value;
            descriptor.value = (...args) => {
                method.apply(target, args);
                console.info(`log ${type}`);
            }
        }
    };
    class Ad {
        @log('show')
        show() {
            console.info('ad was shown');
        }
        @log('click')
        click() {
            console.info('ad was clicked');
        }
    }
    let ad  = new Ad();
    ad.show(); 
    // ad was shown
    // log show
    ad.click();
    // ad was clicked
    // log click
}