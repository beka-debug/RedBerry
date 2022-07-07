let myform = document.querySelector("#regform")
let fullname = document.querySelector(".fullname")
let email = document.querySelector(".email")
let bday = document.querySelector(".bday")
let phone = document.querySelector(".phone")
var allchks = document.querySelectorAll(".chk")


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
    if(fullname.length < 2){
        
        e.preventDefault();

    }
    else{
        //თუ ვალდიდაცი გაირა შეიქმენბა ახალი ობიექტი
        //თუ ახალი ობიექტი შეიქმნა დაემატება მასივში და შეინახება ლოკალში
        // for(var i of allchks){
        //     i.style.visibility = "visible"
        // }
       
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
}

