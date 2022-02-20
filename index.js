//<------- Variables ------->
let billAmountInput = document.getElementById("billAmountInput");
let nbPeopleInput = document.getElementById("nbofPeopleInput");
let tipButtons = document.getElementsByClassName("tip-button");



//<------- Event Listeners ------->
billAmountInput.addEventListener("click", changeColor);
billAmountInput.addEventListener("focusout", verifyInput);
nbPeopleInput.addEventListener("click", changeColor);
nbPeopleInput.addEventListener("focusout", verifyInput);

//<------- Functions ------->
function changeColor() {
    if (this == billAmountInput || this == nbPeopleInput) {
        this.style.outlineColor = "hsl(172, 67%, 45%)";
    }

}

function verifyInput() {
    if (this.value == "0" || this.value == "") {
        this.style.border = "1px solid red";
    } else {
        this.style.border = "none";
    }
}

