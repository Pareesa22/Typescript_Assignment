let guestList1: string[] = ["Hamza","Aneesa","Ali","Sofia"];


function dinnerInvitation(guest: string) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us `);
}
// Iterate through the guest list and print invitation messages
console.log("Original Guest List is ");
guestList1.forEach(dinnerInvitation);
const guestNotComing = "Aneesa";
const newGuest = "Hanifa";
console.log("Name of guest who is not coming is " +guestNotComing);

let updatedGuestList: string[] = guestList1.filter(guest => guest !== guestNotComing);
updatedGuestList.push(newGuest);

// Print the updated guest list
console.log("\nUpdated guest list:");
updatedGuestList.forEach(dinnerInvitation);