const person = {
  name: 'Taiwo',
  age: 20,
  city: 'Awka',
  state: 'Ondo'
}

for (const detail in person) {
  console.log(`${detail} : ${person[detail]}`)
}
