function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You order is empty!");
    }
    else {
        console.log("Items:");
        items.forEach(function (item) { return console.log("- " + item); });
    }
    console.log("\n");
}
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese", "Bacon");
orderSandwich();
