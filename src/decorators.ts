// 1、装饰器初试
function setName(){
    console.log('get setName1');
    return target=> {
        console.log('return setName')
    }
}

function setAge() {
    console.log('get setAge');
    return target => {
        console.log('return setAge')
    }
}

@setName()
@setAge()
class TestDecorator {}
console.log('---------------------------');

// 2、类装饰器
let sign = null;
function setName2(name: string){
    return (target: new() =>any)=>{
        sign = target;
        console.log(target.name);
    }
}
@setName2('loading')
class ClassName {
    constructor(){}
}
console.log(sign === ClassName);
console.log(ClassName.prototype.constructor === sign);

function addName(constructor: new() => any) {
    constructor.prototype.name = 'loading'
}
@addName
class ClassD {}
// /**
//  * 会和 class 同名合并，属性定义会放到原型对象上 (__proto__),
//  * 合并后值验证值是否存在，而不验证值类型
//  */
interface ClassD {
    __proto__ : number,
    name: number
}

const d1 = new ClassD()
console.log(d1.__proto__.constructor);
console.log(d1.name);
console.log('---------------------------');
// 3、1.装饰器返回类会覆盖类实例的值
// function classDecorator <T extends new(...arg: any[]) => {} > (target:T) {
//     return class extends target {
//         private newProperty = 'newProperty'
//         private hello = 'override'
//     }
// }
// 2.修改装饰器(参数装饰器)
function classDecorator(target: any): any {
    return class {  // 这里返回如果不继承的话(以上方式)，返回类会覆盖类实例
        public newProperty = 'newProperty'
        public hello = 'override'
    }
}
function setName3(t: number){
    console.log('get setName');
    return target=> {
        console.log('return setName' + t)
    }
}

@setName3(10)
@classDecorator
class Greeter {
    property = 'property'
    hello: number
    constructor(m:number){
        this.hello = m
    }
}
console.log(new Greeter(12));
console.log('---------------------------');
// 4、方法装饰器,用来修饰类的原型方法。
// function enumerable(bool:boolean){
//     return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
//         console.log(target,'target')
//         descriptor.enumerable = bool
//     }
// }
// 如果方法装饰器返回一个值，它会被用作方法的属性描述符 22 会覆盖 12
function enumerable(bool: boolean) {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        return {
            value(){
                return 22
            },
            enumerable: bool
        }
    }
}
class ClassF {
    public name: string = 'loading'
    constructor(public age: number){
        
    }
    @enumerable(false)
    getAge(){
        return this.age
    }
    
}
const classf = new ClassF(12)
console.log(classf.getAge());

for(const key in classf){
    console.log(key,'key');
    
}
console.log('---------------------------');
// 5、访问器装饰器
function enumberable(bool: boolean){
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = bool
    }
}
class ClassG {
    private _name: string
    constructor(name: string){
        this._name = name
    }
    @enumberable(false)
    get name(){
        return this._name
    }
    set name(name:string){
        this._name = name
    }
}
const classg = new ClassG('LOADING')
for(const key in classg){
    console.log(key);
    
}
console.log('---------------------------');
// 6、属性装饰器
/**
 * target 对于静态成员来说是类的构造函数{constructor: ƒ}，对于实例成员是类的原型对象 ClassH
 */

class ClassH {
    @PrintPropertyName
    static ppname: string = 'hello' // static
}

function PrintPropertyName(target: any, propertyName: string) {
    console.log(propertyName)
    console.log(target); // ?
}
console.log('---------------------------');
// 7、参数装饰器
function required(target: any, propertyName: string, index: number){
    console.log(`修饰的是${propertyName}第${index + 1}个参数`)
}
class CLassI {
    public name: string = 'loading'
    public age: number = 20
    
    public getinfo(prefix: string, @required infoType: string): any {
        return prefix + ' ' + this[infoType]
    }
}
interface ClassI {
    [key: string]: string | number | Function
}

const cLassI = new CLassI()
console.log(cLassI.getinfo('pre', 'age'));
