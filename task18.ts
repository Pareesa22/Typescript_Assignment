let countryNames : string[] = ["Neatherland","UAE","USA","Newzeland","Singaporen"];
console.log("original country list is is: \n",countryNames);
console.log("Sorting country in aplhabatical order");
// slice() allows to copy original list without modifying it
let alphaOrder : string[] = countryNames.slice().sort();
alphaOrder.forEach(country => console.log(country));
//showing original list
console.log("original array is: \n",countryNames);
let reverseOrder : string[] = alphaOrder.slice();
reverseOrder.reverse();
console.log("countries in reverse order is");
reverseOrder.forEach(country => console.log(country));
console.log("Reverse country names to its original list");
reverseOrder.reverse();
reverseOrder.forEach(country => console.log(country));
