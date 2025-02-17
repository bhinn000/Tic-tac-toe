console.log("Welcome to Tic Tac Toe")

//Element
box=document.querySelectorAll(".box")
const reset=document.querySelector("#reset")
isGameOver=false

let whoseTurn="X"


//change the turn
const changeTurn=()=>{
    return whoseTurn==="X"?"0":"X"
}

const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    


        wins.forEach(e=>{      
      
            if((boxtext[e[0]].innerText!=="" && boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) ){
                isGameOver=true
                info=document.querySelector(".info")
                info.innerText= whoseTurn + " won";
                
            }
      
        })
}


Array.from(box).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
    if(boxtext.innerText===""){
        
        boxtext.innerText=whoseTurn
        checkWin()
        whoseTurn=changeTurn();
        if(!isGameOver){
            info=document.querySelector(".info")
            info.innerText="Turn for " + whoseTurn;
        }
       
  
    }  
    })
})



// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
   
})


