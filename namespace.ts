// 装饰方法无参数
namespace a {
    interface Person {
        name: string;
        age: number
    }
    function enhancer(target: any) {
        console.log(target) // [function:Person]
        console.log(target.prototype) // Person {eat:[function]}
        target.prototype.name = 'loading'
        target.prototype.myname = 'new myname'
        target.prototype.age = 12
        target.prototype.eat = function () {
            console.log('eat');
        }
    }
    @enhancer
    class Person {
        public age: number = 32
        myname: String = "default name"
        constructor(name: String) {
            this.myname = name
        }
        eat() {
            console.log('eat function initial')
        }
    }
    let p: Person = new Person('people');
    console.log(p.name);
    console.log(p.myname);
    console.log(p.age);
    p.eat();
}
// 装饰方法有参数
namespace b {
    interface Person {
        name: string;
        eat: any
    }
    function enhancer(name: string) {
        return function enhancer(target: any) {
            target.prototype.name = name;
            target.prototype.eat = function () {
                console.log(this.name + ' eat');
            }
        }
    }

    @enhancer('zhufeng')
    class Person {
        constructor() { }
    }
    let p: Person = new Person();
    console.log(p.name);
    p.eat();
}
// 装饰类
namespace c {
    interface Person {
        name: string;
        eat: any
    }
    function enhancer(target: any) {
        return class {
            name: string = 'jiagou'
            eat() {
                console.log('吃饭饭');
            }
        }
    }
    @enhancer
    class Person {
        constructor() { }
    }
    let p: Person = new Person();
    console.log(p.name);
    p.eat();
}