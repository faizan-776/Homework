let current_users: string[] = ["Faizan", "Usman", "Muhib", "Waris", "Shayan"];
let new_users: string[] = ["Ahmed", "Muhib", "Hasaan", "Shayan", "Amaan"];
for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i] === current_users[j]) {
      usernameExists = true;
      break;
    }
  }
  if (usernameExists) {console.log("Sorry, '" + new_users[i] +"' is already taken. Please enter a new username.");
  } else {
    console.log(new_users[i] + " is available!");}
}
