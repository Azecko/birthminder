function isBirthday(date:Date) {
  const givenDate = new Date(date)
  const today = new Date()

  if(givenDate.toDateString() === today.toDateString()) {
    return true;
  }

  return false;
}

export default isBirthday;
