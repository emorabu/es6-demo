// 基本定义和生成实例
{
    class Person {
        constructor(name = 'defaultUser') {
            this.name = name;
        }
    }
    let aPerson = new Person('zhangsan');
    console.log(aPerson); // e {name: "zhangsan"}
}

//继承
{
    class Person {
        constructor(name = 'defaultUser') {
            this.name = name;
        }
    }
    class Child extends Person {

    }
    console.log(new Child()); // t {name: "defaultUser"}
}

{
    class Person {
        constructor(name = 'defaultUser') {
            this.name = name;
        }
    }
    class Child extends Person {
        constructor(name = 'child') {
            super(name); // super 必须在第一行
            this.type = 'child';
        }
    }
    console.log(new Child()); // e {name: "child", type: "child"}
    console.log(new Child('lisi')); // e {name: "lisi", type: "child"}
}

// setter, getter
{
    class Person {
        constructor(name = 'defaultUser') {
            this.name = name;
        }
        get longName() {
            return 'name_' + this.name;
        }
        set longName(value) {
            this.name = value;
        }
    }
    let person = new Person();
    console.log(person.longName); // name_defaultUser
    person.longName = 'hello';
    console.log(person.longName); // name_hello

}

// 静态方法
{
    class Person {
        constructor(name = 'defaultUser') {
            this.name = name;
        }
       static tell() {
            console.log('hello');
       }
    }
    Person.tell(); // hello
}

// 静态属性
{
    class Person {
        constructor(name = 'defaultUser') {
            this.name = name;
        }
    }
    Person.type = 'human';
    console.log(Person.type); // human
}