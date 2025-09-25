const now = new Date();
console.log("now", now);
// access year
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay()); // 0 => sunday, 6 for saturday

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getTime());