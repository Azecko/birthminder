function deleteBirthday(index:string) {
    window.localStorage.removeItem(`birthday_${index}`);
    window.location.reload();
}

export default deleteBirthday;
