let magicianArray :string[]=["boby","john","eric"];
let great_magicians: string[] = [];
function show_magicians(magicians: string[]): void {
      magicians.forEach((magician) => {
      console.log(magician);
  });

}
// Function to modify magician names
function make_great(magicians: string[]): string[] {
    magicians.forEach((magician) => {
    great_magicians.push(`"the Great ${magician}"`);
    })
    return great_magicians;
}
make_great(magicianArray);
console.log("original magincian array");
show_magicians(magicianArray);
console.log("Great magicians array");
show_magicians(great_magicians);