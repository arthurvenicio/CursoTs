export function objectsUnion<T, U>(obj: T, obj2: U): T & U {
    return Object.assign({}, obj, obj2);
}

const obj = { key: 'value 1' };
const ob2 = { key2: 'value 2' };

const union = objectsUnion(obj, ob2);

console.log(union);
