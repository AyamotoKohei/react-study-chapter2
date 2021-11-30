const key = 'bar';
const baz = 65536;
const obj1 = { foo: 256, [key]: 4096, baz: 65536 }
console.log(obj1);

const obj2 = { baz };
console.log(obj2);