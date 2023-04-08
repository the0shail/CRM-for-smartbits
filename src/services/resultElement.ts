
/**
 * Returns the number of data objects in state
 * @param {Array} array We specify mainly state
 * @returns {number} Returns a number with the number of objects
 */
function resultElement(array) {
    let resultElement: number = array.reduce((lenght, value, i) => i + 1, 1);
    return resultElement
}

export default resultElement