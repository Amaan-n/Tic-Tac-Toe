let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; //playerX,player0

const winPatterns = [[0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText = "0";
            turn0 = false ;
        }
        else{
            box.innerText = "X";
            turn0= true;
        }
        box.disabled = true;
       checkWinner();        
    });
});

const disabledBoxs = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxs = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner)=>{
    msg.innerHTML = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxs();
}

const checkWinner = ()=>{
         for (let patterns of winPatterns) {
             let pos1val = boxes[patterns[0]].innerText;
             let pos2val = boxes[patterns[1]].innerText;
             let pos3val = boxes[patterns[2]].innerText;
             if(pos1val != ""  && pos2val != "" && pos3val != ""){
                 if(pos1val === pos2val && pos2val === pos3val){
                     showWinner(pos1val); //pos1val is the same value of winner
                    }
                }     
            }
};

const resetGame = () =>{
    turn0 = true;
    enableBoxs();
    msgContainer.classList.add("hide");
}
const rest = document.querySelector("#reset-btn")
newGameBtn.addEventListener("click",resetGame);
rest.addEventListener("click", resetGame);


