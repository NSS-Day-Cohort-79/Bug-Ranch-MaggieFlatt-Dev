const { database } = require("./database.js")

// declare a variable named roundUp and assign the parameter herdSize 
const roundup = (herdSize) => {
    // declare a variable named cattle and assign an empty array
    const cattle = []
    // declare another variable called types and assign it the cattleTypes array from the database array by dot notation
    const types = database.cattleTypes
    // loop through cattle array. Set counter to 0, if herdSize is bigger than 0, add 1 to counter. loop through all 50 until there are none left. 
    for (let counter = 0; counter < herdSize; counter++) {
        // declare a variable called randomType and have it check the length of cattle type, which is 4, multiple it by Math.random which assigns it a random decimal between 0-3 because it is indexing the array of 4 cattleTypes. then it rounds down to a whole number with Math.floor.
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
        
    }

    return cattle
}

module.exports = { roundup }