// const getArray = <T, U>(arg1: T, arg2: U, times: number): [T, U][] => {
//   return new Array(times).fill([arg1, arg2])
// }
// console.log(getArray(1, 'b', 3))

// type GetArray = <T>(arg1: T, times: number) => T[]

// type GetArray<T> = (arg1: T, times: number) => T[]

// let getArray: GetArray<number> = (arg1, times) => {
//   return new Array(times).fill(arg1)
// }
// console.log(getArray(12, 2))

// 泛型约束
// interface ValieWithLength {
//   length: number
// }
// const getArray = <T extends ValieWithLength>(arg: T, times: number) => {
//   return new Array(times).fill(arg)
// }
// getArray("abc", 3)
// getArray(10, 5)

// 在泛型约束中使用类型参数
const getProp = <T, K extends keyof T>(obj: T, prop: K) => {
  return obj[prop]
}
const obj4 = {
  a: 'a',
  b: 'b'
}
console.log(getProp(obj4, 'a'))
// console.log(getProp(obj4, 'c'))
// 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数