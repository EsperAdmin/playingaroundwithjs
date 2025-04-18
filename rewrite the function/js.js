// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.
const array = [1, 2, 3, 4, 5]
sumOfTripledEvens(array)

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    console.log(`Default Function = ${sum}`);
  }
  

sumOfTripledEvens2(array)
function sumOfTripledEvens2(array) {
const filt = array.filter((num) => num % 2 === 0);
const mp = filt.map((num) => num * 3);
const sum = mp.reduce((total, currentItem) => {
    return total + currentItem;
}, 0);
console.log(`Redone function = ${sum}`);
}