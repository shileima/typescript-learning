// 用来描述或提取一定的行为，不能被实例化
// 抽象的方法不能具有实现，父类中抽象的方法必须在子类中具有实现
abstract class Animal {
    name: string = "loading"
    constructor(name: string) {
        this.name = name
    }
    abstract getName(): void
    getAnimalname() {
        return 'Animal Name'
    }
    speak(): void {
        console.log('hello', this.name)
    }
}
interface Flying {
    fly(): void
}
interface Eating {
    eat(): void
}
/* 子类只能继承一个父类但可以实现多个方法 */
class Cat extends Animal implements Flying, Eating {
    getName() {
        console.log(super.getAnimalname() + '|' + this.name)
    }
    fly() {
        console.log('flying')
    }
    eat() {
        console.log('eating')
    }
}
let c2 = new Cat('猫')
// c2.name = "Ketty"
c2.speak()
c2.fly()
c2.getName()

// 接口 Interface
/* 
 * 接口内不能实现方法，无法初始化变量
 * 作用1、用来描述对象的形状
 * 作用2、对某些行为的抽象
 * 抽象类也可以使用接口
 * 接口内的所有方法都为抽象
 * 接口是为了实现某些身份或功能例如 fly eat
 */

interface Speakable {
    name: string
    speak(): void
}
interface Speakable2 {
    age: number
}
let speakman: Speakable, Speakable2 = {
    name: "loading",
    age: 10,
    speak() {
        console.log(this.name)
    }
}

// 任意属性
interface Animal2 {
    readonly name: string;
    getName(): string;
    [propName: string]: any
}
let a2: Animal2 = {
    name: 'Jones',
    getName() { return this.name },
    age: 10,
    city: 'beijing'
}

// 接口继承
interface SpeakableParent {
    speak(): void
}
interface SpeakableUncle {
    say(): void
}
interface SpeakableChild extends SpeakableParent, SpeakableUncle {
    speakChinese(): void
}
class Man implements SpeakableChild {
    speakChinese() { console.log('Chinese') }
    speak() { console.log('speak') }
    say() { }
}
// 函数类型接口
interface Discount {
    (price: number, discount: number): number
}
let cost: Discount = function (price: number): number {
    return price * 0.9
}
console.log(cost(10, 0.8))

// 可索引接口
interface UserInterface {
    [aaa: number]: boolean | string
}
let arr1: UserInterface = ['1', '2', '3', true]
let obj1: UserInterface = { 0: false, 1: '1' }

// 约束类的构造函数

class Animal3 {
    constructor(public name: string) {
    }
}
class Animal4 {
    constructor() {

    }
}
interface withClassName {
    new(name: string): Animal3
}
function create(clazz: withClassName, name: string) {
    return new clazz(name)
}
let c1 = create(Animal3, "loading")
console.log(c1.name)



