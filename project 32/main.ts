let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let ordinal: string;
  if (numbers[i] === 1) {
    ordinal = "1st";
  } else if (numbers[i] === 2) {
    ordinal = "2nd";
  } else if (numbers[i] === 3) {
    ordinal = "3rd";
  } else {
    ordinal = numbers[i] + "th";
  }
  console.log(ordinal);
}