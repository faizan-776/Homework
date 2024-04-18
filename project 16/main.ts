let people: string[] = ["Faizan", "Usman", "Waris"];
let notattend: string = "Waris";
console.log(notattend + " is not coming for the dinner.");
let indexOfnotattend: number = people.indexOf(notattend);
if (indexOfnotattend !== -1) {
  people[indexOfnotattend] = "Hamza";
}
for (let i = 0; i < people.length; i++) {
  console.log(people[i] + ", i would like to invite you to a dinner.");
}
console.log("We are inviting 3 more guests!!");
people.unshift("Ali");
people.splice(Math.ceil(people.length / 2), 0, "Shayan");
people.push("Muhib");
for (let i = 0; i < people.length; i++) {
  console.log(people[i] + ", I would like to invite you to dinner.");
}
console.log("Apologies but we can only invite 2 people");
while (people.length > 2) {
  let removedguest: string = people.pop()!;
  console.log("Sorry " + removedguest + ", we can't invite you to dinner.");
}
for (let i = 0; i < people.length; i++) {
  console.log(people[i] + ", you are still invited to the dinner.");
}
people.pop();
people.pop();
console.log("After removing all guests, the list is now empty:");
console.log("List of people remaining = " + people);