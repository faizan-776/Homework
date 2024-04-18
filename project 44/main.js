function carInfo(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    return {
        manufacturer: manufacturer,
        model: model,
        extras: extras,
    };
}
var car = carInfo("Toyota", "Corolla", { color: "blue" }, { year: 2022 });
console.log(car);
