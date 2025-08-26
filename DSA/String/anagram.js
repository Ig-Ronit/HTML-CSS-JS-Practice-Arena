let str1 = "abcd",
  str2 = "bcad";

if (str1.split("").sort().join("") == str2.split("").sort().join("")) {
  console.log("These are anagram strings");
} else {
  console.log("these are not anagram strings");
}
