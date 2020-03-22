// 泛型方法
function createArray<T>(length: number, val: T): Array<T> {
    let arr: T[] = []
    for (let i = 0; i < length; i++) {
        arr[i] = val
    }
    return arr;
}

let arr3 = createArray<string>(5, "a")
console.log(arr3)

// 泛型类
class myArray<T> {
    private list: Array<T> = []
    add(val: T) {
        this.list.push(val)
    }
    getMax(): T {
        let max: T = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] > max) {
                max = this.list[i]
            }
        }
        return max;
    }
}
let array = new myArray<number | string>()
array.add(12)
array.add(3)
array.add(2)
array.add('44')
console.log(array.getMax())

// 泛型接口
