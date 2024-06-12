var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var dataList =[];
if (localStorage.getItem("dataList")!=null) {
    dataList = JSON.parse(localStorage.getItem("dataList"));
}
function validationSignIn(){
    var regex = {
        userName : /^\w{3,20}$/,
        userPass : /^\w{8,15}$/,
        userEmail : /^\w{1,}@(yahoo|gmail)\.com$/,
        };
     var data = {
        name:userName.value,
         pass:userPass.value,
        email:userEmail.value,
        };
   for (var i =0 ; i<dataList.length;i++) {
     if (dataList[i].email == userEmail.value) {
        existMsg()
        return;
     } 
     }
        if(regex.userName.test(userName.value)&&regex.userPass.test(userPass.value)&&regex.userEmail.test(userEmail.value)){
            dataList.push(data);
            updateLocalStorage();
            validMsg();
        }else{
            invalidMsg();
            }
    };
        function updateLocalStorage() {
            localStorage.setItem("dataList",JSON.stringify(dataList));
        }
        function validMsg() {
        document.querySelector("p.validMsg").classList.add("d-block");
        document.querySelector("p.invalidMsg").classList.add("d-none");
        document.querySelector("p.invalidMsg").classList.remove("d-block");
        document.querySelector("p.validMsg").classList.remove("d-none");
        document.querySelector("p.existMsg").classList.add("d-none");
        document.querySelector("p.existMsg").classList.remove("d-block");


        }
        function invalidMsg() {
        document.querySelector("p.invalidMsg").classList.add("d-block");
        document.querySelector("p.validMsg").classList.remove("d-block");
        document.querySelector("p.validMsg").classList.add("d-none");
        document.querySelector("p.invalidMsg").classList.remove("d-none");
        document.querySelector("p.existMsg").classList.add("d-none");
        document.querySelector("p.existMsg").classList.remove("d-block");

        }
        function existMsg(){
            document.querySelector("p.existMsg").classList.add("d-block");
            document.querySelector("p.existMsg").classList.remove("d-none");
            document.querySelector("p.validMsg").classList.add("d-none");
            document.querySelector("p.invalidMsg").classList.add("d-none");
        }