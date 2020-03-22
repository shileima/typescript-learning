"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* readyonly */
var Anima = /** @class */ (function () {
    function Anima(name) {
        this.name = name;
    }
    Anima.prototype.getName = function () {
        console.log(this.name);
    };
    return Anima;
}());
var ani = new Anima('penny');
// ani.name = 'dd' // readonly 属性不能重新赋值
console.log(ani.name);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name) || this;
    }
    return Dog;
}(Anima));
var d = new Dog('rrre', 12);
d.getName();
console.log('---------------------');
/* 存取器 */
var User = /** @class */ (function () {
    //myname: string;
    // public 设置参数为具有全局属性
    function User(myname) {
        this.myname = myname;
        // this.myname = myname;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            console.log('get');
            return this.myname;
        },
        set: function (newName) {
            console.log('set name');
            this.myname = newName;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
//let u = new User(123);
var u = new User('loading');
u.myname = "seanma";
console.log(u);
/* 类 */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person();
p.name = "loading123";
p.getName();
/* 函数重载: 在ts里表现为为一个函数提供多种函数类型的定义 */
var obj = {};
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else {
        obj.age = val;
    }
}
attr('loading');
// attr(true)
attr(10);
console.log(obj);
var getUsernameFunction = function (firstname, lastname) {
    // return "12";
    return firstname + ' ' + lastname;
};
var rs = getUsernameFunction('loading', "ma");
console.log(rs);
var z1 = "first";
//let z2:zType = "two"
var isOk = true;
var isOk2 = Boolean(0);
var isOk3 = new Boolean(1);
var str = new String('loading');
var str2 = "name";
var na;
na = 10;
console.log(na.toFixed(2));
console.log('---------------------');
var cc = [];
cc.push(undefined);
console.log(cc);
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL"; // GIRL = "女"
})(Gender || (Gender = {}));
console.log(Gender[0]);
console.log(Gender.BOY);
console.log('---------------------');
var aa;
aa = false;
console.log(aa);
/* any > (string|number) > undefined|null > never */
/* never 是死循环或报错函数的返回值; */
function bb() {
    console.log(123);
    return undefined;
}
bb();
var arr = [12, 12, 23, 32, "loading"]; // 普通数组
var arr2 = ["age", 12, false]; // 元数组必须成对出现
console.log(arr2);
// 可选参数：在TS中函数的形参和实参必须一样，不一样就要配置可选参数,而且必须是最后一个参数
function print(name, age) {
    console.log(name, age);
}
print('zfpx');
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/users');
// 剩余参数
function sum() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    console.log(Array.isArray(number));
    return number.reduce(function (current, item) { return current + item; }, 0);
}
console.log(sum(12, 12));
// 属性存取器
var User2 = /** @class */ (function () {
    //类里面 子类 都可以访问,其它任何地方不能访问
    function User2(myname) {
        this.myname = myname;
        this.mynamePublic = myname;
        this.mynamePrivate = myname;
    }
    Object.defineProperty(User2.prototype, "h", {
        get: function () {
            console.log('get');
            return this.mynamePublic;
        },
        set: function (value) {
            console.log('set');
            this.mynamePublic = value;
        },
        enumerable: true,
        configurable: true
    });
    return User2;
}());
var user = new User2('zhufeng');
var UserCopy = /** @class */ (function (_super) {
    __extends(UserCopy, _super);
    function UserCopy(myname) {
        var _this = _super.call(this, myname) || this;
        _this.myname = myname;
        _this.mynamePublic = myname;
        _this.mynameProtected = myname;
        return _this;
        // this.mynamePrivate = myname;
    }
    return UserCopy;
}(User2));
var usercopy = new UserCopy('userCopy');
user.h = 'jiagou';
console.log(user.h);
console.log(user.mynamePublic);
// console.log(user.mynameProtected)
// console.log(user.mynamePrivate)
console.log(usercopy.h);
console.log(usercopy.mynamePublic);
// console.log(usercopy.mynameProtected)
