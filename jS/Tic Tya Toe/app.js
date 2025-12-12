let boxes = document.querySelectorAll(".box");
let turn = true;
let newbtn = document.querySelector("#newBtn")
let reset = document.querySelector("#reset")
let mesg = document.querySelector(".msg")
let win = document.querySelector("#win")
let count = 1;
const WINNERPATTERN = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if (turn) {
            box.innerText = "X"
            turn = false
             count++;
        }else{
            box.innerText = "O"
            turn = true
             count++;
        }
       
        box.disabled = true;
        checkWinner();
    })

})


newbtn.addEventListener("click" , () => {
    mesg.classList.add("hide")
    for (const box of boxes) {
        box.innerText = ""
        
    }
    
})
reset.addEventListener("click" , () => {
    mesg.classList.add("hide")
    for (const box of boxes) {
        box.innerText = ""
        
    }
})

function checkWinner() {
    for(let pattern of WINNERPATTERN){
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;
        if (pos0val != "" && pos1val != "" && pos2val != ""){
            if (pos0val === pos1val && pos1val === pos2val){
                console.log("Winner " + pos0val);
                mesg.classList.remove("hide");
                win.innerText = `The Winner Is ${pos1val}`;
                
            }
        } 
        
    }
}
