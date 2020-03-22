// https://es6.ruanyifeng.com/?search=super&x=0&y=0#docs/class-extends


// function Food () {
//   this.type = 'food'
// }
// Food.prototype.getType = function () {
//   return this.type
// }

// function Vegitable () {
//   this.weight = 100
// }
// Vegitable.prototype = new Food()

// const v = new Vegitable('tomato')

// console.log(v.getType())
// console.log(v.__proto__.__proto__.hasOwnProperty('getType'))
// console.log(v.hasOwnProperty('type'))
// console.log(v.hasOwnProperty('weight'))

// class Food {
//   constructor(name) {
//     this.type = 'food'
//     this.name = name
//   }
//   getName () {
//     return this.name
//   }
//   getType () {
//     return this.type
//   }
//   static getClassName () {
//     return this.name
//   }
// }
// class Vegitable extends Food {
//   constructor(name, weight) {
//     super(name)
//     this.weight = weight
//   }
// }
// const v = new Vegitable('tomato', 100)
// console.log(v)
// console.log(v.getName())
// console.log(v.name)
// console.log(v.type)
// console.log(v.weight)
// console.log('-----------')
// console.log(v.hasOwnProperty('name'))
// console.log(v.hasOwnProperty('type'))
// console.log(v.hasOwnProperty('weight'))
// console.log(v.__proto__.__proto__.hasOwnProperty('getType'))
// console.log('-----------')
// console.log(v instanceof Vegitable)
// console.log(v instanceof Food)
// console.log(Vegitable.getClassName())
// console.log('-----------')
// console.log(Object.getPrototypeOf(Vegitable) === Food)

// super 作为对象使用：
// 在普通方法中 => 父类的原型对象
// 在静态方法中 => 父类
// class Parent {
//   constructor() {
//     this.type = 'parent'
//   }
//   getName () {
//     return this.type
//   }
//   // static getType () {
//   //   return 'parent type'
//   // }
// }
// Parent.getType = () => {
//   return 'is parent'
// }
// class Child extends Parent {
//   constructor() {
//     super()
//     this.type = 'child'
//     console.log('constructor ' + super.getName())
//   }
//   getPrentName () {
//     console.log('getPrentName ' + super.getName())
//   }
//   getParentType () {
//     // getType is static func ,super 在普通方法中是父类的原型对象
//     console.log('getParentType ' + Child.getType())
//     // console.log('getParentType ' + super.getType())
//   }
//   static staticGetParentName () {
//     // console.log('staticGetParentName ' + super.getName())
//     console.log('staticGetParentName ' + super.getType())
//   }
// }
// const c = new Child()
// c.getPrentName()
// c.getParentType()
// Child.staticGetParentName()

// class Parent {
//   constructor() {
//     this.name = 'parent'
//   }
//   print () {
//     return this.name
//   }
// }
// class Child extends Parent {
//   constructor() {
//     super()
//     this.name = 'child'
//   }
//   childPrint () {
//     console.log('childPrint ' + super.print())
//   }
// }
// const c = new Child()
// c.childPrint()

// prototype __proto__
// 实例的 __proto__ 指向构造函数的 prototype
// const obj3 = new Object()
// console.log(obj3.__proto__ === Object.prototype)
// // 子类的 __proto__ 指向父类本身
// // 子类的 prototype 的 __proto__ 指向父类的 prototype
// // 子类实例的__proto__ 指向子类的 prototype
// class Parent { }
// class Child extends Parent { }
// const c = new Child()

// console.log(Child.__proto__ === Parent)

// console.log(Parent.prototype.__proto__ === Object.prototype)
// console.log(Child.prototype.__proto__ === Parent.prototype)
// console.log(c.__proto__ === Child.prototype)

// es5 构造函数的继承是先创建 this，然后把构造函数的方法添加到 this 上
// es6 的类继承是先从父类取到对象实例 this，调用 super()后，再把子类的属性和方法加到 this 上

// class A {
//   constructor() {
//     this.p = 10
//   }
// }
//   A.prototype.x = 2
// class B extends A {
//   constructor() {
//     super()
//     // 属性x定义在父类的原型对象上，super就可以取到
//     console.log(super.x) // 2
//     // 由于super指向父类的原型对象，所以p定义在父类实例上的方法或属性，
//     // 是无法通过super调用的。
//     console.log(super.p) // undefined
//   }
// }
// const b = new B()

// this指向子类实例，所以如果通过super对某个属性赋值，
// 这时super就是this，赋值的属性会变成子类实例的属性。
// class A {
//   constructor() {
//     this.x = 1;
//   }
// }
// // A.prototype.x = 10

// class B extends A {
//   constructor() {
//     super();
//     this.x = 2;
//     super.x = 3;
//     console.log(super.x); // undefined
//     console.log(this.x); // 3
//   }
// }

// let b = new B();

// 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象
// class Parent {
//   static myMethod (msg) {
//     console.log('static', msg);
//   }

//   myMethod (msg) {
//     console.log('instance', msg);
//   }
// }

// class Child extends Parent {
//   static myMethod (msg) {
//     super.myMethod(msg);
//   }

//   myMethod (msg) {
//     super.myMethod(msg);
//   }
// }

// Child.myMethod(1); // static 1

// var child = new Child();
// child.myMethod(2); // instance 2

// 在子类的静态方法中通过super调用父类的方法时，
// 方法内部的this指向当前的子类，而不是子类的实例。
// class A {
//   constructor() {
//     this.x = 1;
//   }
//   static print () {
//     console.log(this.x);
//   }
// }
// class B extends A {
//   constructor() {
//     super();
//     this.x = 2;
//   }
//   static m () {
//     super.print();
//   }
// }
// B.x = 3;
// B.m() // 3

// 上面代码中，super.valueOf()表明super是一个对象，因此就不会报错。
// 同时，由于super使得this指向B的实例，所以super.valueOf()返回的是一个B的实例。
class A { }
class B extends A {
  constructor() {
    super()
    console.log(super.valueOf() instanceof B) // true
  }
}
const b = new B()