export default function getAge(dateString) {
  if (dateString.length < 10) {
    return 0;
  }
  var dateParts = dateString.split("-");
  var today = new Date(2019, 9, 1);
  var birthDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
