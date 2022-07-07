var players = document.querySelector(".players")
var choose = document.querySelector(".choose")
var back = document.querySelector(".back")
fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
.then(x=> x.json())
.then(info=>{
    console.log(info)
    for(var i of info){
        var tmp = `
        <div class="pl">
            <span>${i.name}</span>
            <img src="${i.image}" alt="">
        </div>
        `
        players.innerHTML += tmp
   
    }
    var allplayers = document.querySelectorAll(".pl")
    for(var i of allplayers){
    i.addEventListener("click",function(){
      choose.innerText = this.children[0].innerText
      players.classList.toggle('players');
    
    })
  }
})
var z = localStorage.getItem("truecheck") || "false"
localStorage.setItem("truecheck",z)
console.log(localStorage.getItem("truecheck"))
choose.addEventListener("click",function(){
    players.classList.toggle('players');
})

back.addEventListener("click",function(){
  z = "true"
  localStorage.setItem("truecheck",z)
  console.log(localStorage.getItem("truecheck"))
})

