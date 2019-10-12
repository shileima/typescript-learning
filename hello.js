/* 存取器 */
var User = /** @class */ (function () {
    function User() {
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
var u = new User();
u.myname = "seanma";
console.log(u);
console.log('---------------------');
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
function sum() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    console.log(Array.isArray(number));
    return number.reduce(function (current, item) { return current + item; }, 0);
}
console.log(sum(1, 2, 3, 4));
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
    Gender[Gender["GIRL"] = 1] = "GIRL"; // GIRL="gg"
})(Gender || (Gender = {}));
console.log(Gender[0]);
console.log(Gender.BOY);
console.log('---------------------');
var aa;
aa = false;
console.log(aa);
/* any > (string|number) > undefined|null > never */
function bb() {
    console.log(123);
    return undefined;
}
bb();
var arr = [12, 12, 23, 32, "loading"]; // 普通数组
var arr2 = ["age", 12, false]; // 元数组必须成对出现
console.log(arr2);
