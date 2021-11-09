const original = { a: 1, b: 2, c: 3 };

const copy = Object.assign({}, original);
console.log(copy);
console.log(copy === original);

// assign が破壊的メソッドであることを知るための例題
const assigned = Object.assign(original, { c: 10, d: 50 }, { d: 100 });
console.log(assigned);
console.log(original);