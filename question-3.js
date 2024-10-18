// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

async function getUserData() {
  try {
    const nameArr = [];
    const userData = await getUsers();
    const filteredData = userData.filter((person) => person.name.length > 17);
    filteredData.map((person) => {
      nameArr.push(person.name);
    });
    console.log(nameArr);
  } catch (error) {}
}

(async () => {
  await getUserData();
})();
