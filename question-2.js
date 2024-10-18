const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// const filteredStudent = students.filter((student) => student.score > 50);
// const increasedScore = filteredStudent.map((student) => student.score * 1.1);
// const totalScore = increasedScore.reduce((acc, cur) => acc + cur).toFixed(1);

// console.log(totalScore);

// ---------- Solution in function ----------------
function totalScore(arr) {
  return arr
    .filter((student) => student.score > 50)
    .map((student) => student.score * 1.1)
    .reduce((acc, cur) => acc + cur)
    .toFixed(1);
}

console.log(totalScore(students));
