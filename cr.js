const inpButton = document.getElementById("save-btn")
let myleads = []
const inputEl = document.getElementById("input-el")
const unEL = document.getElementById("unorder-el")


inpButton.addEventListener("click",function(){
    // myleads.push(inputEl.value)
    for (i in myleads){
        unEL.innerHTML +="<li>"+ myleads[i]+"</li>"
   
    }
}
)

 

