let guestList: string[] = ["Hamza","Aneesa","Ali","Sofia"];


function dinnerInvitation(guest: string) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us `);
}
// Iterate through the guest list and print invitation messages
console.log("Original Guest List is ");
guestList.forEach(dinnerInvitation);