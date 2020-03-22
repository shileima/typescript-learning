// 1, es5 对象扩展
// function Point (x, y) {
//   this.x = x
//   this.y = y
// }
// Point.prototype.getPoint = function () {
//   return '(' + this.x + ',' + this.y + ')'
// }

// 1, es6 对象扩展
// es5 与 es6 区别在于，es5 本身就是函数，创建实例时可以不用 new，
// es6 生成实例时必须使用 new
// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//     // return { a: 'a' } // 这里返回值会作为实例的值
//   }
//   getPoint () {
//     return `(${this.x},${this.y})`
//   }
// }
// const p = new Point(2, 3)
// console.log(p)
// console.log(p.getPoint())
// console.log(p instanceof Point)
// console.log(p.hasOwnProperty('x'))
// console.log(p.hasOwnProperty('getPoint'))
// console.log(p.__proto__)
// console.log(p.__proto__.hasOwnProperty('getPoint'))

// 2, es5 set get
// var info = {
//   _age: 18,
//   set age (newVal) {
//     if (newVal > 18) {
//       console.log('我怎么老了？')
//     } else {
//       console.log('哈哈我还年轻')
//     }
//     this._age = newVal
//   },
//   get age () {
//     console.log('问我年龄干嘛？')
//     return this._age
//   }
// }

// info.age = 10
// console.log(info.age)

//2, es6 set get

// class Info2 {
//   constructor(age) {
//     this._age = age
//   }
//   set age (newVal) {
//     if (newVal > 18) {
//       console.log('我怎么老了？')
//     } else {
//       console.log('哈哈我还年轻')
//     }
//     this._age = newVal
//   }
//   get age () {
//     console.log('问我年龄干嘛？')
//     return this._age
//   }
// }
// let info2 = new Info2(19)
// info2.age = 90
// console.log(info2.age)

// 静态方法
// class Info3 {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   getPosition () {
//     return `(${this.x},${this.y})`
//   }
//   // static 上属性或方法不能被实例继承
//   static getClassName () {
//     return Info3.name
//   }
// }
// Info3.z = 10
// const i = new Info3(4, 5)
// console.log(i)
// console.log(i.getPosition())
// console.log(Info3.getClassName())
// // console.log(i.getClassName())
// console.log(Info3.z)

// new.target
class Parent {
  constructor() {
    if (new.target === Parent) {
      throw new Error('Parent不能被实例化')
    }
  }
}
class Child extends Parent {
  constructor() {
    super()
  }
}
const p = new Child()
const p2 = new Parent()