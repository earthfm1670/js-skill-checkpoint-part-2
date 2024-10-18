const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้

// const allPeople = [];
// allPeople.push(...techupPeople, ...techcoolPeople);
// console.log(allPeople);
// const youngPeople = allPeople.filter((people) => people["age"] < 20);
// console.log(youngPeople);

// ---------- Solution in function ----------------

function everyoneUnder20(arr1, arr2) {
  return [...arr1, ...arr2].filter((people) => people.age < 20);
}

console.log(everyoneUnder20(techupPeople, techcoolPeople));
