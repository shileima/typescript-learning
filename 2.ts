let str1 = "Loading"
console.log(str1.toLowerCase())
console.log('---------------------');
// 参数属性
class User3 {
    public myName: string
    public readonly nameReadonly: string
    // 参数添加public后，参数变成了类的属性
    constructor(public readonly value: string) {
        this.myName = value
    }
    get name() {
        return this.myName
    }
    set name(val: string) {
        this.myName = val
    }
}
let u3 = new User3('seam')
u3.name = "loading"
// u3.nameReadonly = "readonly"
console.log(u3)
console.log(u3.nameReadonly)
console.log(u3.myName)
console.log(u3.value)
console.log(u3.name)
console.log('---------------------');

// 类的属性（无需创建实例）
class Father {
    public static className = "Daddy"
    public static getClassName() {
        console.log(Father.className)
        return Father.className
    }
}
Father.getClassName()
