/* readyonly */
class Anima {
    constructor(public readonly name: string) { }
    public getName() {
        console.log(this.name);
    }
}
let ani = new Anima('penny')
// ani.name = 'dd' // readonly 属性不能重新赋值
console.log(ani.name);

class Dog extends Anima {
    constructor(name: string, age: number) {
        super(name)
    }
}
let d = new Dog('rrre', 12)
d.getName()
console.log('---------------------');

/* 存取器 */
class User {
    // myname: string;
    // public 设置参数为具有全局属性
    constructor(public myname: string) {
        // this.myname = myname;
    }
    get name() {
        console.log('get')
        return this.myname;
    }
    set name(newName) {
        console.log('set name')
        this.myname = newName;
    }
}
// let u = new User(123);
let u = new User('loading');
u.myname = "script";
console.log(u);
/* 类 */
class Person {
    public name: string;
    public getName(): void {
        console.log(this.name)
    }
}
let p = new Person();
p.name = "loading123";
p.getName()

/* 函数重载: 在ts里表现为为一个函数提供多种函数类型的定义 */
let obj: any = {};
function attr(val: number): void;
// tslint:disable-next-line:unified-signatures
function attr(val: string): void;
function attr(val: number | string): void {
    if (typeof val === 'string') {
        obj.name = val
    } else {
        obj.age = val;
    }
}
attr('loading')
// attr(true)
attr(10)
console.log(obj);

type getUsername = (x: string, y: string) => void; // string
let getUsernameFunction: getUsername = (firstname: string, lastname: string) => {
    // return "12";
    return firstname + ' ' + lastname;
}
let rs = getUsernameFunction('loading', "ma");
console.log(rs);

// 字面量类型
type zType = 1 | "one" | "first";
let z1: zType = "first"
// let z2:zType = "two"

let isOk: boolean = true;
let isOk2: Boolean = Boolean(0)
// tslint:disable-next-line:no-construct
let isOk3: Boolean = new Boolean(1)
// tslint:disable-next-line:no-construct
let str: String = new String('loading')
let str2: string = "name"
let na: number | string;
na = 10;
console.log((na as number).toFixed(2));
console.log('---------------------');
let cc: (number | string)[] = [];
cc.push(undefined)
console.log(cc)

enum Gender {
    BOY, // BOY = "男",
    GIRL // GIRL = "女"
}
console.log(Gender[0]);
console.log(Gender.BOY);

console.log('---------------------');

let aa: boolean;
aa = false;
console.log(aa)

/* any > (string|number) > undefined|null > never */
/* never 是死循环或报错函数的返回值; */
function bb(): void {
    console.log(123)
    return undefined;
}
bb()
let arr: number | (number | string)[] = [12, 12, 23, 32, "loading"] // 普通数组
let arr2: [string, number, boolean] = ["age", 12, false] // 元数组必须成对出现
console.log(arr2);

// 可选参数：在TS中函数的形参和实参必须一样，不一样就要配置可选参数,而且必须是最后一个参数
function print(name: string, age?: number): void {
    console.log(name, age);
}
print('zips');

// 默认参数
function ajax(url: string, method: string = 'GET') {
    console.log(url, method);
}
ajax('/users');

// 剩余参数
function sum(...value: number[]) {
    console.log(Array.isArray(value))
    return value.reduce((current, item) => current + item, 0)
}
console.log(sum(12, 12));

// 属性存取器
class User2 {
    // 类里面可以访问， 子类和其它任何地方都不可以访问
    private mynamePrivate: string;
    // 类里面 子类 其它任何地方外边都可以访问
    protected mynameProtected: string;
    public mynamePublic: string;
    // 类里面 子类 都可以访问,其它任何地方不能访问
    constructor(public myname: string) {
        this.mynamePublic = myname;
        this.mynamePrivate = myname;
    }
    get h() {
        console.log('get')
        return this.mynamePublic;
    }
    set h(value) {
        console.log('set')
        this.mynamePublic = value;
    }
}

let user = new User2('shuting');
class UserCopy extends User2 {
    constructor(public myname: string) {
        super(myname)
        this.mynamePublic = myname;
        this.mynameProtected = myname;
        // this.mynamePrivate = myname;
    }
}
let recopy = new UserCopy('userCopy')
user.h = 'loading';
console.log(user.h);
console.log(user.mynamePublic)
// console.log(user.mynameProtected)
// console.log(user.mynamePrivate)

console.log(recopy.h)
console.log(recopy.mynamePublic)
// console.log(recopy.mynameProtected)