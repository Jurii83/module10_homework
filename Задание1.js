let result = prompt("Введите значение");
result = +result;
// typeof result;
if (typeof result === "number") {
  console.log("Число");
} else {
  console.log("Упс, кажется, вы ошиблись");
}
