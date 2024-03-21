/**
 * The CurtisStack Class.
 *
 * author  Curtis Edwards
 * version 1.0
 * since   2024-03-19
 */

export class CurtisStack {
  // variables
  constructor() {
    self.stackAsList = []
  }

  push(input) {
    self.stackAsList.push(input)
  }

  showStack() {
    let values = ""
    for (let counter = 0; counter < self.stackAsList.length; counter++) {
      values = values + self.stackAsList[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }
}
