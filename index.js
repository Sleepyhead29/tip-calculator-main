//<------- Variables ------->
let billAmountInput = document.getElementById("billAmountInput");
let nbPeopleInput = document.getElementById("nbofPeopleInput");
let tipButtons = document.querySelectorAll(".tip-button");
let customButton = document.querySelector(".custombtn");

let tipPerPerson = document.getElementById("tipPerPerson");
let totalPerPerson = document.getElementById("totalPerPerson");
let tipAmount;





//<------- Event Listeners ------->
billAmountInput.addEventListener("click", changeColor);
billAmountInput.addEventListener("focusout", verifyInput);
nbPeopleInput.addEventListener("click", changeColor);
nbPeopleInput.addEventListener("focusout", verifyInput);
customButton.addEventListener("click", customButtonEffects);
//customButton.addEventListener("focusout", verifyInput);

billAmountInput.addEventListener("focusout", calculateValue);
nbPeopleInput.addEventListener("focusout", calculateValue);
customButton.addEventListener("focusout", calculateValue);
//<------- Functions ------->
function changeColor() {
    if (this == billAmountInput || this == nbPeopleInput) {
        this.style.outlineColor = "hsl(172, 67%, 45%)";
    }

}

function verifyInput() {
    if (this.value == "0" || this.value == "") {
        this.style.border = "1px solid red";

        //Creates Warning Message



        let warning = document.createElement('h4');
        let warningMessage = document.createTextNode("Can't be Zero");
        warning.appendChild(warningMessage);
        warning.style.color = "red";
        warning.setAttribute("id", "warningMessage");

        //Checks previous sibling container

        let textContainer = this.previousElementSibling;

        //Appends the warning message to previous sibling
        if (this.previousSibling) {
            textContainer.append(warning);
        }





    } else {
        this.style.border = "none";
        warning = document.getElementById("warningMessage");
        warning.remove();

    }
}

//Creating active button
tipButtons.forEach(tipButton => {
    tipButton.addEventListener("click", function () {
        tipButtons.forEach(tipBtn => tipBtn.classList.remove("active"));
        this.classList.add("active");
        tipAmount = this.value;
        calculateValue();
        return this.value;
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

//Functions to calculate Total bills 

//console.log(tipValue);

function calculateValue() {
    let billAmount = billAmountInput.value;
    billAmount = Number(billAmount);
    let peopleAmount = nbPeopleInput.value;
    peopleAmount = Number(peopleAmount);
    tipAmount = parseFloat(tipAmount);
    /*console.log(billAmount);
    console.log(peopleAmount);
    console.log(customButton.value);*/
    if (isFinite(tipAmount)) {

        let totalTipAmount = ((tipAmount * billAmount) / peopleAmount) / 100;
        let totalAmount = (billAmount / peopleAmount) + totalTipAmount;


        if (isFinite(totalTipAmount) && isFinite(totalAmount)) {
            tipPerPerson.textContent = totalTipAmount.toFixed(2);
            totalPerPerson.textContent = totalAmount.toFixed(2);
        }else{
            tipPerPerson.textContent = "$0.00";
            totalPerPerson.textContent = "$0.00";
        }
        
        
        

    }






}