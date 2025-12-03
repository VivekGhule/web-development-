let modeBtn = document.createElement("button");
let demo = "light"

modeBtn.innerText = "Dark Mode";
modeBtn.style.padding= "5px 10px"
modeBtn.style.backgroundColor = "Black"
modeBtn.style.color = "#fff"
modeBtn.style.borderRadius = "10px"

document.querySelector("body").prepend(modeBtn)



modeBtn.addEventListener("click", () => {
    if (demo === "light") {
        document.querySelector("body").style.backgroundColor = "#000"
        document.querySelector("h2").style.color = "white"
        modeBtn.innerText = "Light Mode"
        demo = "dark";
        
    }else{
         document.querySelector("body").style.backgroundColor = "#fff"
        document.querySelector("h2").style.color = "#000"
        modeBtn.innerText = "Dark Mode"
        demo = "light";

    }
})