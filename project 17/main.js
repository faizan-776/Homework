var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = [" Tokyo ", " Moscow ", " Paris "];
console.log("Original order: " + places);
console.log("Alphabetical order: " + __spreadArray([], places, true).sort());
console.log("Original order after sorting: " + places);
console.log("Reverse alphabetical order: " + __spreadArray([], places, true).sort().reverse());
console.log("Original order after reverse sorting: " + places);
places.reverse();
console.log("Reversed order: " + places);
places.reverse();
console.log("Original order after reversing again: " + places);
places.sort();
console.log("Sorted in alphabetical order: " + places);
places.sort();
places.reverse();
console.log("Sorted in reverse alphabetical order: " + places);
