function assertNever (value) {
    throw new Error('Unexpected object ' + value);
}
function getArea (s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
            break;
        case 'rectangle':
            return s.height * s.width
            break;
        case 'Circle':
            return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s);
    }
}
