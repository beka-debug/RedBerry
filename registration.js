let myform = document.querySelector("#regform")
let fullname = document.querySelector(".fullname")
let email = document.querySelector(".email")
let bday = document.querySelector(".bday")
let phone = document.querySelector(".phone")
let allchks = document.querySelectorAll(".chk")
let back = document.querySelector(".back")
var redemail = document.querySelector(".redemail")



bday.addEventListener("click",function(){
    this.showPicker()
})

class Person{
    constructor(fullname,email,phone,bday){
        this.fullname = fullname,
        this.email = email,
        this.phone = phone,
        this.bday = bday
    }
}
//isvalid - იგულისხმება თქვენი ვალიდაცია, 
//რომ იმეილი ეკუთვნის ნამდვილად რედბერის.
var go = document.querySelector(".go")
//go.style.pointerEvents = "none"


myform.addEventListener("submit", function(e) {
    if(fullname.value.length < 5){
        redemail.style.visibility = "visible"
        redemail.style.opacity = "1"
        e.preventDefault();

    }
    else{
        //თუ ვალდიდაცი გაირა შეიქმენბა ახალი ობიექტი
        //თუ ახალი ობიექტი შეიქმნა დაემატება მასივში და შეინახება ლოკალში
       var obj = {
        email:email.value,
        fullname:fullname.value,
        phone:phone.value,
        bday:bday.value
       }
       localStorage.setItem("myobject",JSON.stringify(obj))
    }
    
})

var z = localStorage.getItem("truecheck") || "false"
window.onload = function(){
    if(localStorage.getItem("truecheck")=="true"){
        for(var i of allchks){
             i.style.visibility = "visible"
            }
    }
    console.log(localStorage.getItem("truecheck"))
    var registedPerson = JSON.parse(localStorage.getItem("myobject"))
    if(registedPerson!=null){
       fullname.value = registedPerson.fullname
       email.value = registedPerson.email;
       phone.value = registedPerson.phone
       bday.value = registedPerson.bday
    }
}

back.addEventListener("click",function(){
    localStorage.clear()
})
