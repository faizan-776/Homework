var people = ["Faizan", "Usman", "Waris"];
var notattend = "Waris";
console.log(notattend + " is not coming for the dinner.");
var indexOfnotattend = people.indexOf(notattend);
if (indexOfnotattend !== -1) {
    people[indexOfnotattend] = "Hamza";
}
for (var i = 0; i < people.length; i++) {
    console.log(people[i] + ", i would like to invite you to a dinner.");
}
