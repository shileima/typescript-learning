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
