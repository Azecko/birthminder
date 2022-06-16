function deleteBirthday(birthday:string) {
    console.log(birthday)
    window.localStorage.removeItem(`birthday_${birthday}`);
    window.location.reload();
}

export default deleteBirthday;
