let updatedGuestList2 : string []=["salma","hamza","maria","ali","sofia","hanifa","sara"];
console.log("you can invite only 2 peolple");
const len :number = updatedGuestList2.length;
for(let i=len;i>2;i--)
{
    let removedGuest = updatedGuestList2.pop(); // Remove the last guest from the list
    console.log(`"sorry you can not invite ${removedGuest} to dinner."`);
}
console.log("now new invitation includes guest ", updatedGuestList2);
//lets remove last two invitation
for( let i=0;i<2;i++)
{
    updatedGuestList2.pop();
}
//now list is empty
console.log("there are no invitations. list is empty now " +updatedGuestList2)