//<------- Variables ------->
let billAmountInput = document.getElementById("billAmountInput");
let nbPeopleInput = document.getElementById("nbofPeopleInput");
let tipButtons = document.querySelectorAll(".tip-button");
let customButton = document.querySelector(".custombtn");
let resetButton = document.getElementById("resetBtn");
let tipPerPerson = document.getElementById("tipPerPerson");
let totalPerPerson = document.getElementById("totalPerPerson");
let warning = document.getElementById('red-warning');
let tipAmount;





//<------- Event Listeners ------->
billAmountInput.addEventListener("input", changeColor);
billAmountInput.addEventListener("focusout", verifyInput);
nbPeopleInput.addEventListener("input", changeColor);
nbPeopleInput.addEventListener("focusout", verifyInput);
customButton.addEventListener("click", customButtonEffects);
resetButton.addEventListener("click", clearAll);
customButton.addEventListener("input", () => {
    tipAmount = customButton.value;
});

billAmountInput.addEventListener("input", calculateValue);
nbPeopleInput.addEventListener("input", calculateValue);
customButton.addEventListener("input", calculateValue);
//<------- Functions ------->
function changeColor() {
    if (this == billAmountInput || this == nbPeopleInput) {
        this.style.outlineColor = "hsl(172, 67%, 45%)";
    }

}
let executed = false;

function verifyInput() {
    if (this.value < 1 || this.value == "" && executed == false) {
        this.style.border = "1px solid red";

        let textContainer = this.previousElementSibling;

        //Creates Warning Message
        function printWarning() {
            warning.style.display = "inline-block";

            //Checks previous sibling container

            if (executed == false) {
                textContainer.append(warning);
                executed = true;
            }
        }
        printWarning();


    } else if (this.value > 0) {
        this.style.border = "none";
        warning.style.display = "none";
        executed = false;
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

function clearAll() {
    billAmountInput.value = "";
    nbPeopleInput.value = "";
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
    nbPeopleInput.style.border = "none";
    billAmountInput.style.border = "none";

    tipButtons.forEach(tipButton => {
        tipButton.classList.remove("active");

    })

}

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
            totalTipAmount = totalTipAmount.toFixed(2);
            totalTipAmount = totalTipAmount.toString();
            totalTipAmount = "$" + totalTipAmount;
            tipPerPerson.textContent = totalTipAmount;

            totalAmount = totalAmount.toFixed(2);
            totalAmount = totalAmount.toString();
            totalAmount = "$" + totalAmount;
            totalPerPerson.textContent = totalAmount;

            //tipPerPerson.textContent = totalTipAmount.toFixed(2);
            //totalPerPerson.textContent = totalAmount.toFixed(2);
        } else {
            tipPerPerson.textContent = "$0.00";
            totalPerPerson.textContent = "$0.00";
        }




    }


}