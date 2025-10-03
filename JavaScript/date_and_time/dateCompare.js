const expiry = new Date("2026-01-01");
console.log("expiry", expiry);

const isExpired = new Date() > expiry;
console.log("isExpired", isExpired);