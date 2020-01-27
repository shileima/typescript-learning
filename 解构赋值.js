let node = {
  type: 'Identifier',
  name: "foo"
},
  type = "Literal",
  name = 5;

console.log(type, name)

  // 语法规定，代码块语句不允许出现在赋值语句左侧；
  // 加一对小括号将块语句转换成一个表达式，从而实现解构赋值。
  ; ({ type, name } = node);

console.log(type, name)