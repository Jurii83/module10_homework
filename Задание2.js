let x = 2;
if (typeof x == "string") {
  console.log("x - строка");
} else if (typeof x == "boolean") {
  console.log("x - логический тип");
} else if (typeof x === "number") {
  console.log("x - число");
} else {
  ("Тип x не определён");
}
