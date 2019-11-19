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
interface Animal2 {
    name: string
    getName(): any
}
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











