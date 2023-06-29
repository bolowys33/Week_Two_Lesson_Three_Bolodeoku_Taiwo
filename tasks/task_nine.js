const names = ['Taiwo', 'Kehinde', 'Bukky', 'Babajide']

names.forEach(function (names) {
  console.log(names)
})

const fullNames = names.map((names) => {
  const result = `Bolodeoku ${names}`
  console.log(result);
  return result
})
console.log(fullNames)

const filteredName = names.filter((names) => {
  return names.length < 6
})
console.log(filteredName)
