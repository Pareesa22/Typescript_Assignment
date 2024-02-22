
//task 31:
//version 1: users are there
//let myUsers: string[] = ["ALi","hamza","Sara"]; // 
//version 2: no users are in list
let myUsers: string[] = [];
if (myUsers.length === 0) {
    console.log("we need to find some users");
} else {
        console.log("The username list is not empty.");
          for (let username of myUsers) {
            if (username == "admin") {
                console.log(`Hello admin, would you like to see a status report?`);
                     }
       else 
      {
        console.log(`Hello ${username}, thank you for logging in again.`);
      }
    }
} 