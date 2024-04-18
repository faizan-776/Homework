var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var ordinal = void 0;
    if (numbers[i] === 1) {
        ordinal = "1st";
    }
    else if (numbers[i] === 2) {
        ordinal = "2nd";
    }
    else if (numbers[i] === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = numbers[i] + "th";
    }
    console.log(ordinal);
}
