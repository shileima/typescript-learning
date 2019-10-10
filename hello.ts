
enum Gender{
    BOY, // BOY="bb"
    GIRL // GIRL="gg"
}
console.log(Gender[0]);
console.log(Gender.BOY);

console.log('---------------------');

let aa: boolean;
aa = false;
console.log(aa)

/* any > (string|number) > undefined|null > never */
function bb(): void {
    console.log(123)
    return undefined;
}
bb()
let arr: number | (number | string)[] = [12, 12, 23, 32, "loading"] // 普通数组
let arr2: [string, number, boolean] = ["age", 12, false] // 元数组必须成对出现
console.log(arr2);
