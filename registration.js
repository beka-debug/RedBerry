let myform = document.querySelector("#regform")
let fullname = document.querySelector(".fullname")
let email = document.querySelector(".email")
let bday = document.querySelector(".bday")
let phone = document.querySelector(".phone")


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
        
    }
    
})