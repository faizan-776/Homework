function orderSandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
    console.log("You order is empty!");
  } else {
    console.log("Items:");
    items.forEach((item) => console.log("- " + item));
  }
  console.log("\n");
}

orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese", "Bacon");
orderSandwich();
