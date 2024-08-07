// let boxes=document.querySelectorAll(".box");
// let reset=document.querySelector("#resetbtn");
// let newgame=document.querySelector("#newbtn");
// let msgContainer=document.querySelector(".msg_container");
// let msg=document.querySelector("#msg");

// let turnO = true;
// let count=0;

// const winpatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// const resetgame=()=>{
//     turnO=true;
//     enabledboxes();
//     msgContainer.classList.add("hide")
// }

// boxes.forEach((box) => {
//     box.addEventListener("click",() => {
//        console.log("box was clicked");
//         //    console.log (`button have clicked ${n} times`)
//         if (turnO) {
//            box.innerText="O";
//            turnO=false;
//         }
//         else {
//             box.innerText="X";
//             turnO=true;
//         }
//         box.disabled = true;
//         count++;

//         let iswinner=checkWinner();

//         if (count === 9 && !iswinner) {
//             checkDraw();
//           }
//     });
// });

// const checkDraw = () => {
//     msg.innerText = `Game was a Draw.`;
//     msgContainer.classList.remove("hide");
//     disabledboxes();
//   };

// const disabledboxes=()=>{
//     for(let box of boxes){
//         box.disabled=true;
//     }
// }
// const enabledboxes=()=>{
//     for(let box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
// }

// const showWinner=(winner) => {
//     msg.innerText = `Congratulation the winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disabledboxes();
// }

// const checkWinner = () => {
//     for(let pattern of winpatterns) {
//     let pos1val=boxes[pattern[0]].innerText;
//     let pos2val=boxes[pattern[1]].innerText;
//     let pos3val=boxes[pattern[2]].innerText;
    
//     if(pos1val !="" && pos2val !="" && pos3val !="" ) {
//         if(pos1val===pos2val && pos2val===pos3val) {
//             console.log("winner",pos1val);
//             showWinner(pos1val);
//         }
//     }
  
//   }
// }
// newgame.addEventListener("click",resetgame)
// reset.addEventListener("click",resetgame)





 