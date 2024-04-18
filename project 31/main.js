var current_users = ["Faizan", "Usman", "Muhib", "Waris", "Shayan"];
var new_users = ["Ahmed", "Muhib", "Hasaan", "Shayan", "Amaan"];
for (var i = 0; i < new_users.length; i++) {
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i] === current_users[j]) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Sorry, '" + new_users[i] + "' is already taken. Please enter a new username.");
    }
    else {
        console.log(new_users[i] + " is available!");
    }
}
