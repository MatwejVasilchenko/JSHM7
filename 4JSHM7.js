let month = prompt("Який номер поточного місяця?");
let timeOfTheYear;

switch (month) {
  case "Лютий":
    timeOfTheYear = "Зима";
    break;
  case "Січень":
    timeOfTheYear = "Зима";
    break;
  case "Грудень":
    timeOfTheYear = "Зима";
    break;
  case "Листопад":
    timeOfTheYear = "Осінь";
    break;
  case "Жовтень":
    timeOfTheYear = "Осінь";
    break;
  case "Вересень":
    timeOfTheYear = "Осінь";
    break;
  case "Серпень":
    timeOfTheYear = "Літо";
    break;
  case "Липень":
    timeOfTheYear = "Літо";
    break;
  case "Червень":
    timeOfTheYear = "Літо";
    break;
  case "Травень":
    timeOfTheYear = "Весна";
    break;
  case "Квітень":
    timeOfTheYear = "Весна";
    break;
  case "Березень":
    timeOfTheYear = "Весна";
    break;
  default:
    timeOfTheYear = "Ми с тобою ЛПППЛПЛПППЛПППП ERROR 404";
}
console.log(`Зараз ${timeOfTheYear}`);
