/**
 * This is the standard index.ts starting point.
 *
 * author  Curtis Edwards
 * version 1.0
 * since   2024-03-19
 */
import CurtiStack from './CurtisStack'

// use Bicycle class
const someBicycle1 = new MrCoxallStack()
const someBicycle2 = new MrCoxallStack()
someBicycle1.

console.log('\nSet speed to 10 on bike 1.')
someBicycle1.speed = 10
console.log(`The current speed on bike 1 is: ${someBicycle1.speed}`)

console.log('\nSet speed to 10 on bike 2.')
someBicycle2.speed = 5
console.log(`The current speed on bike 2 is:' ${someBicycle2.speed}`)

console.log('\nApply the brake with value of 2.')
someBicycle1.applyBrake(2)
someBicycle2.applyBrake(2)
console.log(`The new speed on bike 1 is: ${someBicycle1.speed}`)
console.log(`The new speed on bike 2 is: ${someBicycle2.speed}`)

console.log('\nDone.')
