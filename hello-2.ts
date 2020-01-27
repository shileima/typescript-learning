let num: number = 123
let str3: string = `this is a string ${num}`
console.log(str3)

enum Roles {
  SUPER_ADMIN = 1,
  ADMIN,
  USER
}
console.log(Roles.ADMIN)

let v: void
v = null
console.log(v)
// undefined null
let u1: null
u1 = null
u1 = undefined
// u1 = '123'
num = undefined

// never 类型
// let neverVatiable: never = (() => {
//   while (true) { }
// })()
// neverVatiable = 123
// num = neverVatiable

// 类型断言
const getLenth = (target: string | number) => {
  if ((target as string).length || (<string>target).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
console.log(getLenth('123'))
console.log(getLenth(22))

