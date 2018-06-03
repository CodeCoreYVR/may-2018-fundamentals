// Assignment: Small or Large city Edit Next Module
// Write a function that takes an object that looks like:
// cities = { vancouver: 603502, burnaby: 223220, langley: 104177 }
// and prints if the city is large (more than 150,000) or small (otherwise).
// The printout should look something like: vancouver is a large city

// [Stretch] Print the city name capitalized

const citiesInBC = { vancouver: 603502, burnaby: 223220, langley: 104177 }

function citySize(cities) {
  for(const city in cities) {
    let cityName = city.substring(0,1).toUpperCase() + city.substr(1)

    if (cities[city] > 150000) {
      console.log(`${cityName} is a large city`)
    } else {
      console.log(`${cityName} is a small city`)
    }
  }
}

citySize(citiesInBC)
