abstract class Parent {
    constructor(public name: string) { }
    getParentName() {
        return "Parent Name"
    }
}
class Child extends Parent {
    getName() {
        return super.getParentName() + "|child name"
    }
}
let c3 = new Child("bady")
console.log(c3.getName())