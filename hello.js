var getUsernameFunction = function (firstname, lastname) {
    // return "12";
    return firstname + ' ' + lastname;
};
var rs = getUsernameFunction('loading', "ma");
console.log(rs);
var z1 = "first";
//let z2:zType = "two"
console.log('---------------------');
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
