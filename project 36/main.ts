function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(`Printing a ${size} shirt. The message: "${message}"`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "This is a message");
