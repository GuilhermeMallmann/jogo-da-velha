
let win = document.getElementById("win")

document.addEventListener('DOMContentLoaded', ()=>{

    let Square = document.querySelectorAll(".square")

    Square.forEach((Square) =>{
        Square.addEventListener('click', handleClick)
    })

})

function handleClick(event){

    let Square = event.target
    let position = Square.id

    if(handleMove(position)){
        setTimeout(()=>{
            win.innerHTML = ("O jogo acabou, o vencedor foi = " + symbols[playerTime])
        },10)
    }
    updateSquare()
}

function updateSquare(){

    let Square = document.querySelectorAll(".square")

    Square.forEach((Square) =>{
        let position = Square.id
        let symbol = board[position]

        if (symbol != ''){
            Square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}



