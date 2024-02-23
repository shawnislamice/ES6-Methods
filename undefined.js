// 8 ways to get undefined

// First
let a; //Not Initialized
console.log(a);

// Second
function second(a, b) {
  const total = a + b; //Function with no return
}
const result = second(5, 5);
console.log(result);

// Third
function third(a, b, c, d) {
  const total = a + b + c + d; //Not fulfill the parameters values
  console.log(a, b, c, d);
}
third(2, 3);

// Fourth
function fourth(a, b) {
  if (a < 0 || b < 0) {
    return; //Not define what returns, so it returns undefined
  }
  return a + b;
}

const total = fourth(2, -5);
console.log(total);

//Fifth
const fifth = { id: 2, name: "Fifth", age: 40 };
console.log(fifth.age, fifth.salary); //Salary property is not declared in the object

//Sixth
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[6]); //Index 5 and 6 was not declared in the array

//Seventh
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[6]); //sixth 1 already deleted, it creates invisible wholes we should not use it.
//We should use splice

//Eight
const eight = undefined; //Directly declared undefined
console.log(eight);

const data = { result: [], updated: null };

console.log(typeof undefined);
console.log(typeof null);
