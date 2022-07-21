const inpButton = document.getElementById("save-btn")
const delButton = document.getElementById("del-el")
const savetab = document.getElementById("tab-el")
let myleads = []


const inputEl = document.getElementById("input-el")
const unEL = document.getElementById("unorder-el")



const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
if (leadsfromlocalstorage) {
    myleads = leadsfromlocalstorage;
    render(myleads);
}
savetab.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tab[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    })
})



function render(leads) {
    var listitems = "";
    for (i in leads) {
        listitems += `<li> 
        
        <a href = ${leads[i]} target = '_blank'> 
    
        ${leads[i]} 
        
        </a> 
    
        </li> `

    }

    unEL.innerHTML = listitems;



}



delButton.addEventListener("dblclick", function () {
    localStorage.clear()
    myleads = []
    render(myleads)
})


inpButton.addEventListener("click", function () {
    myleads.push(inputEl.value)
    inputEl.value = "";
    var ml = JSON.stringify(myleads)
    localStorage.setItem("myleads", ml)

    render(myleads);

}
)




