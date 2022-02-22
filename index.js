//<------- Variables ------->
let billAmountInput = document.getElementById("billAmountInput");
let nbPeopleInput = document.getElementById("nbofPeopleInput");
let tipButtons = document.querySelectorAll(".tip-button");
let customButton = document.querySelector(".custombtn");




//<------- Event Listeners ------->
billAmountInput.addEventListener("click", changeColor);
billAmountInput.addEventListener("focusout", verifyInput);
nbPeopleInput.addEventListener("click", changeColor);
nbPeopleInput.addEventListener("focusout", verifyInput);
customButton.addEventListener("click", customButtonEffects);
customButton.addEventListener("focusout",verifyInput);
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

//Creating active button
tipButtons.forEach(tipButton => {
    tipButton.addEventListener("click", function () {
        tipButtons.forEach(tipBtn => tipBtn.classList.remove("active"));
        this.classList.add("active");
    });
});

//Custom Button effects
function customButtonEffects() {
    function replaceButton() {

        customButton.removeAttribute("type");
        customButton.setAttribute("type", "text");
        customButton.value = "";
        customButton.style.backgroundColor = "hsl(185, 41%, 97%)";


        /* function createCustomInput(){
             let customInput = document.create
         }*/
         

    }

    
    this.style.outlineColor = "hsl(172, 67%, 45%)";
    replaceButton();
}