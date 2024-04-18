let people:string[] = ["Faizan", "Usman", "Waris"];
let notattend:string = "Waris";
console.log (notattend + " is not coming for the dinner.")
let indexOfnotattend: number = people.indexOf(notattend);
if (indexOfnotattend !== -1) { people[indexOfnotattend] = "Hamza"; }
for (let i=0; i< people.length; i++ ) {console.log(people[i] + ", i would like to invite you to a dinner.")}