// Assignment: [lab] Popular Name

// Given an object that looks like:
// names = { mike: 2, john: 3, jen: 5, eli: 1 }
// Write a function that takes an object above and returns a string noting the
// most popular name. It should return a string that looks like "the most popular name is jen"

const names = { mike: 2, john: 3, jen: 5, eli: 1 }

function popularName(names) {
  let popularName = ''
  let occurences = 0

  for(let student in names) {
    // console.log(student)
    // console.log(names[student])
    if (names[student] > occurences) {
      occurences = names[student]
      popularName = student
    }
  }

  console.log(`${popularName} is the most popular student with ${occurences} occurences`)
}























































function popularName(names) {
  let mostPopular = ""
  let occurances = 0

  for(let person in names) {
    if (names[person] > occurances) {
      mostPopular = person
      occurances = names[person]
    }
  }

  return `the most popular name is ${mostPopular}`
}
