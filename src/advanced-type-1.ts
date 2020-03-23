/* 高级类型 type 验证 while 循环的完整性 */
interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number
}
interface Circle {
    kind: 'Circle',
    radius: number
}
function assertnever(value: never): never {
    throw new Error('Unexpected object ' + value)
}
type Shape = Square | Rectangle | Circle
function getArea(s: Shape): number {
    switch (s.kind) {
        case 'square':
            return s.size * s.size
            break;
        /* case 'rectangle':
            return s.height * s.width
            break; */
        case 'Circle':
            return Math.PI * s.radius ** 2
        default: return assertnever(s)
    }
}