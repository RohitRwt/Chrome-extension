const inpButton = document.getElementById("save-btn")
let myleads = []
const inputEl = document.getElementById("input-el")
const unEL = document.getElementById("unorder-el")


inpButton.addEventListener("click", function () {
    myleads.push(inputEl.value)
    render();
    inputEl.value = "";
}
)

function render(){
var listitems = "";
    for (i in myleads) {
    // listitems += "<li> <a  taget = '_blank' href = '" +myleads[i] +"' >"   +myleads[i]+  " "+  "</li>"
    // Templete string usage
    listitems += `<li> 
    
    <a href = ${myleads[i]} target = '_blank'> 

    ${myleads[i]} 
    
    </a> 

    </li> `

    }

unEL.innerHTML = listitems;



}


























































// const recipients = "james"
// const name = "rohit"

// const email = `hey ${recipients}!
//  how is it going?

// Cheers ${name} `
// console.log(email)