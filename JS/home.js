var dataList = [];
if (localStorage.getItem("dataList")!=null) {
    dataList = JSON.parse(localStorage.getItem("dataList"));
}
document.getElementById("homeUserName").innerHTML=dataList.at(-1);