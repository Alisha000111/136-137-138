"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}, i value:, i`);
}
try {
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message);
}
console.log("Before breakpoint");
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
