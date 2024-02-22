let guestList2: string[] = ["Hamza","Aneesa","Ali","Sofia"];
function dinnerInvitation(guest: string) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us `);
}
// Iterate through the guest list and print invitation messages
console.log("Original Guest List is ");
guestList2.forEach(dinnerInvitation);
const guestNotComing1 = "Aneesa";
const newGuest1 = "Hanifa";
console.log("Name of guest who is not coming is " +guestNotComing1);

let updatedGuestList1: string[] = guestList2.filter(guest => guest !== guestNotComing1);
updatedGuestList1.push(newGuest1);
// Print the updated guest list
console.log("\nUpdated guest list:");
updatedGuestList1.forEach(dinnerInvitation);
//Add 3 more guest .append at first ,middle and last position.
//for 1st position
console.log("1 more guest salma is in invited");
updatedGuestList1.unshift("salma");
console.log("\n new guest list after adding first guest:");
updatedGuestList1.forEach(dinnerInvitation);

//to append in middle of guest list
// first find middle position in array
let middleIndex = Math.floor(updatedGuestList1.length / 2);
console.log("/n");
console.log("middle position to append guest is " +middleIndex );
updatedGuestList1.splice(middleIndex, 0, "maria");
console.log("\n new guest list after appending in middle of list");
updatedGuestList1.forEach(dinnerInvitation);
// add guest in last position in list
updatedGuestList1.push("sara");
console.log("\n new guest list after appending in last position of list");
updatedGuestList1.forEach(dinnerInvitation);
