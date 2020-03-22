let addFunc: (x: number, y: number) => number
addFunc = (arg1: number, arg2: number): number => arg1 + arg2 + 3
// console.log(addFunc(1, 2))

type Minutes = (x: number, y: number) => number
const MinutesFunc: Minutes = (arg1, arg2) => arg1 - arg2
// console.log(MinutesFunc(4, 2))

type isString = string
let stringVal: isString = "12"

function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map((item: any) => Number(item))
  }
}
// console.log(handleData("abc").map(item => item.toFixed(1)))