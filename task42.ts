let magicianList :string[]=["boby","john","eric"];
function show_magicianList(magicians :string[]):void
{ 
  makeGreat(magicians);
}
 function makeGreat(magicians: string[]): void {
    
        magicians.forEach((magician) =>{
        console.log(`"the Great ${magician}"`); 
    })
  }
show_magicianList(magicianList); 