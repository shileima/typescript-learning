/* ts 中 this 类型的使用 */
class Counter {
    constructor(public value: number = 0) {
        this.value = value
    }
    public add(value: number) {
        this.value += value
        return this
    }
    public minus(value: number) {
        this.value -= value
        return this
    }
}
class PowCounter extends Counter {
    /* constructor(value) {
        super(value)
    } */
    public pow(value: number) {
        this.value = this.value ** value
        return this
    }
}
let counter2 = new PowCounter(2)
console.log(counter2.pow(3).add(10).minus(5).add(4))

/* 索引类型 (index types) keyof */
interface InfoInterfaceAdvanced {
    name: string,
    age: number
}
let infoInterface1: InfoInterfaceAdvanced = {
    name: 'LOADING',
    age: 12
}
let infoProp: keyof InfoInterfaceAdvanced
infoProp = 'age' // 或 'name'

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(n => obj[n]);
}
interface IgetValue {
    name: string,
    age: number,
    city: string
}
const infoForGetValue: IgetValue = {
    name: 'Allen',
    age: 28,
    city: 'Beijing'
}
console.log(getValue(infoForGetValue, ['name', 'age', 'city']));

/* [] 索引访问操作符 */
type NameTypes = InfoInterfaceAdvanced['name']
let nameVal: NameTypes = '23'