// current date and time
const now = new Date();
console.log("now", now);

// set manual date using numbers
const d1 = new Date(1987, 11, 25, 6, 10, 20, 0); // Jan = 0, Dec = 11
console.log("d1", d1);

// set manual date using string // yyyy-mm-dd // 24 hours cycle
const d2 = new Date("2020-12-20T23:30:21"); //Jan = 1, Dec = 12
console.log(d2);

// using miliseconds
const d3 = new Date(0);
console.log("d3", d3);