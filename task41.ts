let magicians :string[]=["boby","john","eric"];
function show_magician(magicians :string[]):void
{  console.log("Names of magicians are:");
    magicians.forEach((magician) => 
  {
    console.log(magician);
  })
}
show_magician(magicians);