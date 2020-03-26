// class Point {
//   public x: number
//   public y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   public getPosition() {
//     return `(${this.x},${this.y})`
//   }
// }
// const point = new Point(1, 2)
// console.log(point)

class Parent4 {
  public age: number
  public m: string
  public x: number
  public static staticName: string = 'Parent'
  // 如果构造函数使用 protected 则不能被 new 创造实例
  protected constructor(age: number) {
    this.age = age
    this.m = 'm'
  }
  protected getAge() {
    return this.age
  }
}
Parent4.prototype.x = 2
// const p1 = new Parent(18)
// console.log(p1.age)
// console.log(p1.staticName)
console.log(Parent4.staticName)

class Child2 extends Parent4 {
  constructor(age: number) {
    super(age)
    // 通过 "super" 关键字只能访问基类的公共方法和受保护方法
    // console.log(super.age)
    console.log(super.getAge())
    // console.log(super.x)
  }
  // get x() {
  //   return super.x
  // }
}
const c4 = new Child2(19)