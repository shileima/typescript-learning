let str1 = "Loading"
console.log(str1.toLowerCase())
console.log('---------------------');
//参数属性
class User3 {
    myname: string
    readonly nameReadonly: string
    // 参数添加public后，参数变成了类的属性
    constructor(public readonly value: string) {
        this.myname = value
    }
    get name() {
        return this.myname
    }
    set name(val: string) {
        this.myname = val
    }
}
let u3 = new User3('seanma')
u3.name = "loading"
// u3.nameReadonly = "readyonly"
console.log(u3)
console.log(u3.nameReadonly)
console.log(u3.myname)
console.log(u3.value)
console.log(u3.name)
console.log('---------------------');

// 类的属性（无需创建实例）
class Father {
    static className = "Daddy"
    static getClassName() {
        console.log(Father.className)
        return Father.className
    }
}
Father.getClassName()
