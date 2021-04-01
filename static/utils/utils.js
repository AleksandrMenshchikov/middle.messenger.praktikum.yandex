export function formData(formElement) {
  const obj = {};
  for (const iterator of new FormData(formElement).entries()) {
    obj[iterator[0]] = iterator[1];
  }
  console.log(obj);
}
