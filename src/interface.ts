const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}
const rs2 = getFullName({
  firstName: 'jack',
  lastName: "19"
})
interface NameInfo {
  firstName: string,
  lastName: string
}
// console.log(rs2)
interface Vegetable {
  color?: string,
  type: string,
  [prop: string]: any // 多余类型检测
}
const getVegetables = ({ color, type }: Vegetable) => {
  return `A${color ? ' ' + color : ''} ${type}`
}

console.log(getVegetables({
  color: 'red',
  type: 'tomato'
}))

// type 定义函数参数及返回值类型
type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (a, b) => a + b
// 函数属性约束
interface CounterI {
  (): void,
  count: number
}
const getCounter = (): CounterI => {
  const c = () => { c.count++ }
  c.count = 1
  // throw new Error('error')
  return c
}

const counter = getCounter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
