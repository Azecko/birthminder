import getIndex from "./getIndex";

function registerBirthday(date:string, name:string) {
  if(date == undefined || name == undefined) {
    return false
  }
  var index = parseInt(getIndex())
  window.localStorage.setItem('index', `${index + 1}`)

  const birthday = {
    index: getIndex(),
    name: name,
    date: date
  }
  window.localStorage.setItem(`birthday_${getIndex()}`, JSON.stringify(birthday));
  window.location.reload();
  return true
}

export default registerBirthday;
