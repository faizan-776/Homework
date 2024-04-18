function carInfo(
  manufacturer: string,
  model: string,
  ...extras: { [key: string]: any }[]
): { manufacturer: string; model: string; extras: { [key: string]: any }[] } {
  return {
    manufacturer: manufacturer,
    model: model,
    extras: extras,
  };
}
const car = carInfo("Toyota", "Corolla", { color: "blue" }, { year: 2022 });
console.log(car);
