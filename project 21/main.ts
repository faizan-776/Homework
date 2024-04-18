let gpu1: { brand: string; model: string } = {
    brand: "Nvidia",
    model: "RTX 4060",
};

let gpu2: { brand: string; model: string } = {
    brand: "AMD",
    model: "RX 7700",
};

//This is Intentional error (gpu3)
console.log("GPU 1: ", gpu1);
console.log("GPU 2: ", gpu2);
console.log("GPU 3: ", gpu2);