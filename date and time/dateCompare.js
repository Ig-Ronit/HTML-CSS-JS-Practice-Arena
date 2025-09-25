const expiry = new Date("2025-01-01");
console.log("expiry", expiry);

const isExpired = new Date() > expiry;
console.log("isExpired", isExpired);