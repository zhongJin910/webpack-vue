export function setCookie(cname, cvalue, { path, secure }) {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    const expires = ";expires=" + now.toUTCString();
    const cpath = path ? ";path=" + cpath : ''
    const csecure = secure ? ";secure= /" : ''
    document.cookie = cname + "=" + cvalue + expires + cpath + csecure;
}

export function getCookie(cname) {
    let allcookies = document.cookie;
    let cookieArr = allcookies.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split("=");
        if (cname == cookiePair[0].trim()) return cookiePair[1]
    }
}