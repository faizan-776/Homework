function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
  }
}

function make_great(magicians: string[]): string[] {
  let modifiedMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
      modifiedMagicians.push("the Great " + magicians[i]);
  }
  return modifiedMagicians;
}

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

let greatMagicians: string[] = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
