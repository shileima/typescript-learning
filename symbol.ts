const s = Symbol()
console.log(s)
const s1 = Symbol()
console.log(typeof s1)
// console.log(s === s1)

let s5 = Symbol('name')
const info = {
  [s5]: 'loading',
  age: 30,
  sex: 'men'
}
console.log(Object.keys(info))
console.log(Object.getOwnPropertyNames(info))
console.log(Object.getOwnPropertySymbols(info))
console.log(Reflect.ownKeys(info))

const s6 = Symbol.for('loading')
const s7 = Symbol.for('loading')
// console.log(s6 === s7) // 浏览器 true
const s8 = Symbol.for('live')
// console.log(s7 === s8) // false
console.log(Symbol.keyFor(s8)) // live
console.log(Symbol.keyFor(s5)) // undefined

let arrt: any = [1, 2]
arrt[Symbol.isConcatSpreadable] = false
console.log([].concat(arrt, [3, 4])) // [Array(2), 3, 4]

// class Array1 extends Array {
//   static get [Symbol.species]() { return Array; }
// }

// const a = new Array1(1, 2, 3)
// const mapped = a.map(x => x * x)

// console.log(mapped instanceof Array1);
// // expected output: false

// console.log(mapped instanceof Array);
// // expected output: true

// const objwith = {
//   a:'a',
//   b:'b'
// }
// with (objwith) }{
//   console.log(a)
//   console.log(b)
// }
console.log(Object.keys(Array.prototype[Symbol.unscopables])[3])