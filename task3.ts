let personName1 :string = "Ali";
const lowerCaseName :string = personName1.toLowerCase();
const upperCaseName :string =personName1.toUpperCase();
const titleCaseName :string = personName1.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
console.log("lowercase name is ", lowerCaseName);
console.log("uppercase name is ", upperCaseName);
console.log("Title case name is ",titleCaseName);
// another way of doing title case is :console.log("titleCase ",personName.replace(/\b\w/g,c=> c.toUpperCase()));