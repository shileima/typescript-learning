//const pi:string;
/* 存取器 */
class User {
    myname: string;
    get name() {
        console.log('get')
        return this.myname;
    }
    set name(newName) {
        console.log('set name')
        this.myname = newName;
    }
}
let u = new User();
u.myname = "seanma";
console.log(u);
console.log('---------------------');
/* 类 */
class Person {
    name: string;
    getName(): void {
        console.log(this.name)
    }
}
let p = new Person();
p.name = "loading123";
p.getName()

/* 函数重载: 在ts里表现为为一个函数提供多种函数类型的定义 */
let obj: any = {};
function attr(val: number): void;
function attr(val: string): void;
function attr(val: any) {
    if (typeof val === 'string') {
        obj.name = val;
    } else {
        obj.age = val;
    }
}
attr('loading')
//attr(true)
attr(10)
console.log(obj);

function sum(...number: number[]) {
    console.log(Array.isArray(number))
    return number.reduce((current, item) => current + item, 0)
}
console.log(sum(1, 2, 3, 4));

type getUsername = (x: string, y: string) => void; // string
let getUsernameFunction: getUsername = function (firstname: string, lastname: string) {
    // return "12";
    return firstname + ' ' + lastname;
}
let rs = getUsernameFunction('loading', "ma");
console.log(rs);

// 字面量类型
type zType = 1 | "one" | "first";
let z1: zType = "first"
//let z2:zType = "two"

let isOk: boolean = true;
let isOk2: Boolean = Boolean(0)
let isOk3: Boolean = new Boolean(1)
let str: String = new String('loading')
let str2: string = "name"
let na: number | string;
na = 10;
console.log((<number>na).toFixed(2));
console.log('---------------------');
let cc: (number | string)[] = [];
cc.push(undefined)
console.log(cc)

enum Gender {
    BOY, // BOY="bb"
    GIRL // GIRL="gg"
}
console.log(Gender[0]);
console.log(Gender.BOY);

console.log('---------------------');

let aa: boolean;
aa = false;
console.log(aa)

/* any > (string|number) > undefined|null > never */
function bb(): void {
    console.log(123)
    return undefined;
}
bb()
let arr: number | (number | string)[] = [12, 12, 23, 32, "loading"] // 普通数组
let arr2: [string, number, boolean] = ["age", 12, false] // 元数组必须成对出现
console.log(arr2);
