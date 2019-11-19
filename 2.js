"use strict";
var str1 = "Loading";
console.log(str1.toLowerCase());
console.log('---------------------');
//参数属性
var User3 = /** @class */ (function () {
    // 参数添加public后，参数变成了类的属性
    function User3(value) {
        this.value = value;
        this.myname = value;
    }
    Object.defineProperty(User3.prototype, "name", {
        get: function () {
            return this.myname;
        },
        set: function (val) {
            this.myname = val;
        },
        enumerable: true,
        configurable: true
    });
    return User3;
}());
var u3 = new User3('seanma');
u3.name = "loading";
// u3.nameReadonly = "readyonly"
console.log(u3);
console.log(u3.nameReadonly);
console.log(u3.myname);
console.log(u3.value);
console.log(u3.name);
console.log('---------------------');
// 类的属性（无需创建实例）
var Father = /** @class */ (function () {
    function Father() {
    }
    Father.getClassName = function () {
        console.log(Father.className);
        return Father.className;
    };
    Father.className = "Daddy";
    return Father;
}());
Father.getClassName();
