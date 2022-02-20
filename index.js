//<------- Variables ------->
let billAmountInput = document.getElementById("billAmountInput");
let nbPeopleInput = document.getElementById("nbofPeopleInput");
//<------- Event Listeners ------->
billAmountInput.addEventListener("click", changeColor);
billAmountInput.addEventListener("focusout",verifyInput);
nbPeopleInput.addEventListener("click",changeColor);
nbPeopleInput.addEventListener("focusout",verifyInput);
//<------- Functions ------->
function changeColor() {
    this.style.outlineColor = "hsl(172, 67%, 45%)";
    
}

function verifyInput(){
    if(billAmountInput.value == "0" || billAmountInput.value == ""){
        this.style.border = "1px solid red";
    }else{
        this.style.border = "none";
    }
}
