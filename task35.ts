let  animals : string[] = ["cat", "dog", "horse"];
console.log("name of animals are");
for (let animal of animals) {
    console.log(animal);
}
console.log("lets describe these animals: ");
for (let animal of animals) {
  if(animal=='dog')
    console.log(" Dog will be a great pet");
  else if(animal=='cat')
  console.log(" cats are so lovely");
 else 
 console.log(" horses are so energetic");

}
console.log(" all of these pets are lovely and great");