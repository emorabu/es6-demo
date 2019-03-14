let variable = 123;
function foo() {
    console.log('function');
}
class MyClass {
    bar() {
        console.log('class');
    }
}

export default {
    variable,
    foo,
    MyClass
}