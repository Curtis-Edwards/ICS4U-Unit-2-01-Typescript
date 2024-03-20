/**
 * This is the standard index.ts starting point.
 *
 * author  Curtis Edwards
 * version 1.0
 * since   2024-03-19
 */
import { CurtisStack } from './CurtisStack'

let fruits = new CurtisStack()
fruits.push("apple")
fruits.push("banana")
console.log("fruits: " + fruits.show())

let colours = new CurtisStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.show())

let shapes = new CurtisStack()
animals.push("square")
animals.push("triangle")
animals.push("circle")
console.log("animals: " + animals.show())

console.log("\nDone.")
