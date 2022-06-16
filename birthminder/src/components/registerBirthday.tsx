function registerBirthday(date:string, name:string) {
  if(date == undefined || name == undefined) {
    return false
  }
  const birthday = {
    name: name,
    date: date
  }
  window.localStorage.setItem(`birthday_${name}`, JSON.stringify(birthday));
  window.location.reload();
  return true
}

export default registerBirthday;
