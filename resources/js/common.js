const nl2br = (str) => {
    let res = str.replace(/\r\n/g, "<br>");
    res = res.replace(/(\n|\r)/g, "<br>");
    return res;
};

const getToday = () => {
    const date_obj = new Date();
    const yyyy = date_obj.getFullYear();
    const mm = ("0" + date_obj.getMonth()).slice(-2);
    const dd = ("0" + date_obj.getDate()).slice(-2);
    return yyyy + "-" + mm + "-" + dd;
};

export { nl2br, getToday };
