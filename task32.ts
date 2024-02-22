let currentUsers :string[] = ["alia","sara","amna","salma","taha","hamdan"];
 let newUsers :string[] = ["fabiha","amna","ayeza","maham","salma"];
 for (const newUser of newUsers) {
  const lowerCaseNewUser = newUser.toLowerCase();
  let usernameAvailable = true;

  for (const currentUser of currentUsers) {
    if (lowerCaseNewUser === currentUser.toLowerCase()) {
      usernameAvailable = false;
      break; // No need to check further if username found
    }
  }

  if (usernameAvailable) {
    console.log(`Username "${newUser}" is available!`);
  } else {
    console.log(`Username "${newUser}" is already taken. Please try a different one.`);
  }
} 