function getIndex() {
    if(!localStorage.getItem('index')) {
        localStorage.setItem('index', '0')
    }
    var index:any = localStorage.getItem('index')
    return index
}

export default getIndex;
