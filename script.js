const dateset1 = new Date();
const date = dateset1.getDate(); 

const dateset2 = new Date();
const month = dateset2.getMonth();

const princebday = date + " " + month;

if (princebday.toString  != "26 0") {
    document.getElementById("not").innerHTML = "not"
}
