var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var dataList = [];
if (localStorage.getItem("dataList")!=null) {
    dataList = JSON.parse(localStorage.getItem("dataList"));
}
function logIn() {
        for (var i= 0; i< dataList.length;i++) {
        if (dataList[i].email==userEmail.value&&dataList[i].pass==userPass.value) {
            validMsg()
            dataList.push(dataList[i].name);
            updateLocalStorage()
            window.open('./home.html',target="_self")
            return;
        }
       
    }
    invalidMsg()
}
function validMsg() {
        document.querySelector("p.validMsg").classList.add("d-block");
        document.querySelector("p.invalidMsg").classList.add("d-none");
        document.querySelector("p.invalidMsg").classList.remove("d-block");
        document.querySelector("p.validMsg").classList.remove("d-none");
}
function invalidMsg() {
    document.querySelector("p.invalidMsg").classList.add("d-block");
    document.querySelector("p.validMsg").classList.remove("d-block");
    document.querySelector("p.validMsg").classList.add("d-none");
    document.querySelector("p.invalidMsg").classList.remove("d-none");
    }
    function updateLocalStorage() {
        localStorage.setItem("dataList",JSON.stringify(dataList));
    }