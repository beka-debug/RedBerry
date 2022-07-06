var players = document.querySelector(".players")
var choose = document.querySelector(".choose")
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

choose.addEventListener("click",function(){
    players.classList.toggle('players');
})