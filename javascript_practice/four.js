//Spread operator in objects :-

/**
 * VVI
 const a = { x: 1 };
const b = { x: 2, ...a };
console.log(b.x);
 */

/**
 const a = { x: 1, y: 2 };
const b = { ...a, y: undefined };
console.log(b.hasOwnProperty('y'), b.y);
 */

/**
const a = {x:1};
const b = a;
const c = {...a};
b.x = 9;
console.log(a.x, c.x);
 */

/**
 const a = {0:'zero', 2:'two', 1:'one'};
console.log(Object.keys({...a}).join(','));
 */

/**
 * VVI
 Fix (only change RHS): code should produce {id:1, name:'A'} even if data may have extra props.

const data = { id:1, name:'A', secret:true };
const safe = ???
console.log(safe);
*/

/**
 * VVI
 const a = {a:1};
const b = {...a, [Symbol('s')]: 2};
console.log(Object.keys(b).length);
 */

/**
 const obj = {a:1,b:2,c:3};
const {a, ...rest} = obj;
console.log(a, rest);
 */

/**
 const original = { 
  id: 101, 
  meta: { role: 'guest' } 
};

const clone = { ...original };
clone.id = 202;
clone.meta.role = 'admin';

console.log(original.meta.role); 
 */

/**
 * VVI
 const base = {user:{name:'A',role:'u'}};
const patch = {user:{role:'admin'}};
const merged = {...base, ...patch};
console.log(merged.user.name, merged.user.role);

 */

/**
 VVI
 const o = {...{b:2}, a:1, ...{c:3}, 1:'one'};
console.log(Object.keys(o).join(','));
 */

/**
 console.log({ ...(null), a:1 });
console.log({ ...(undefined), b:2 });
 */

/**
 VVI (i will do this later)
 const o = { get x(){ return Math.random(); } };
const c = { ...o };
console.log(o.x === c.x);
 */

/**
 * VVI
 const o = {};
Object.defineProperty(o, 'a', { value:1, enumerable:false });
const c = { ...o };
console.log(c.hasOwnProperty('a'));
 */

/**
 * VVI
 const s = Symbol('s');
const o = { a:1, [s]: 2 };
const c = { ...o };
console.log(Object.getOwnPropertySymbols(c).length, c[s]);
 */

/**
 Object.prototype.polluted = 'p';
const o = {a:1};
const c = {...o};
console.log(c.polluted);
delete Object.prototype.polluted;
 */

/**
 VVI (i will do later)

 const o = {
  get val(){ return 1; }
};
const c1 = {...o};
const c2 = Object.assign({}, o);
console.log('val' in c1, typeof c1.val, 'val' in c2, typeof c2.val);
 */

/**
 const obj = { a: { b: 1 } };
const clone = { ...obj };
clone.a.b = 9;
console.log(obj.a.b);
 */

/*
VVI
const o = { a:1, f: () => 2 };
const c = { ...o };
const j = JSON.stringify(c);
console.log(j);
*/





