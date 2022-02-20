//<------- Variables ------->
let billAmountInput = document.getElementById("billAmountInput");
let nbPeopleInput = document.getElementById("nbofPeopleInput");
let tipButtons = document.getElementsByClassName("tip-button");



//<------- Event Listeners ------->
billAmountInput.addEventListener("click", changeColor);
billAmountInput.addEventListener("focusout", verifyInput);
nbPeopleInput.addEventListener("click", changeColor);
nbPeopleInput.addEventListener("focusout", verifyInput);

Array.from(tipButtons).forEach(function (tipButton) {
    tipButton.addEventListener("click", changeBtnColor);

    function changeBtnColor() {
        this.style.backgroundColor = "hsl(172, 67%, 45%)";
        this.style.color = "hsl(183, 100%, 15%)";
    }
})

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