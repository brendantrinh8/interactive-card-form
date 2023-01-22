//define elements to display card details

const frontNum = document.getElementById('front-card-number')
const frontName = document.getElementById('front-card-name')
const cardExpMM = document.getElementById('front-mm')
const cardExpYY = document.getElementById('front-yy')
const cardBackCvc = document.getElementById("back-cvc")

//Retrieve user input front form selection
const cardForm = document.querySelector('#cardForm');
const cardHolderName = document.getElementById('ccName')
const cCardNum = document.getElementById('ccNum')
const expMonth = document.getElementById('expMM')
const expYear = document.getElementById('expYY')
const cardCvc = document.getElementById('cvcNum')

const nameError = document.getElementById('name-error')
const numberError = document.getElementById('num-error')
const expError = document.getElementById('exp-error')
const cvcError = document.getElementById('cvc-error')

//Wrapper element to validate and submit form.
const btn = document.getElementById('btn');

//functions

// Add values to Card 

cardHolderName.onkeyup = function() {
    if (cardHolderName.value != "") {
        frontName.innerHTML = cardHolderName.value;
    } else {
        frontName.innerHTML = "Jane Appleseed";
    }
};

cCardNum.onkeyup = function() {
    if (cCardNum.value != "") {
        frontNum.innerHTML = cCardNum.value;
    
    } else {
        frontNum.innerHTML = "0000 0000 0000 0000";
    }
}

expMonth.onkeyup = function() {
    if (expMonth.value != "") {
        cardExpMM.innerHTML = expMonth.value;
    } else {
        cardExpMM.innerHTML = "00";
    }
}

expYear.onkeyup = function() {
    if (expYear.value != "") {
        cardExpYY.innerHTML = expYear.value;
    } else {
        cardExpYY.innerHTML = "00";
    }
}

cardCvc.onkeyup = function() {
    if (cardCvc.value != "") {
        cardBackCvc.innerHTML = cardCvc.value;
    } else {
        cardBackCvc.innerHTML = "000";
    }
}

// Display errors

btn.addEventListener( "click", () => {
    
    // Name Error
    
    if (/\S+/gi.test(cardHolderName.value) == false) {
        nameError.style.display = "block";
        cardHolderName.style.border = "2px solid hsl(0, 100%, 66%)";
    } else {
        nameError.style.display = "none";
        cardHolderName.style.border = "2px solid hsl(270, 3%, 87%)";
    }
        
    // Card number Error
    if (cCardNum.lenth == 0) {
        numberError.innerHTML == "Can't be blank"
        cCardNum.style.border = "2px solid hsl(0, 100%, 66%)";
    } else if (/\d{16}/gi.test(cCardNum.value) == false) {
        numberError.style.display = "block";
        cCardNum.style.border = "2px solid hsl(0, 100%, 66%)";
    } else {
        numberError.style.display = "none";
        cCardNum.style.border = "2px solid hsl(270, 3%, 87%)";
    }
    
    // Date Error

    if (/\d{2}/gi.test(expYear.value) == false ||
        /\d{2}/gi.test(expMonth.value)  == false) {
        expError.style.display = "block";
        expMonth.style.border = "2px solid hsl(0, 100%, 66%)";
        expYear.style.border = "2px solid hsl(0, 100%, 66%)";
    } else {
        expError.style.display = "none";
        expMonth.style.border = "2px solid hsl(270, 3%, 87%)";
        expYear.style.border = "2px solid hsl(270, 3%, 87%)";
    }

    //cvc error

    if(/\d{3}/gi.test(cardCvc.value) == false) {
        cvcError.style.display = "block";
        cardCvc.style.border = "2px solid hsl(0, 100%, 66%)";
    } else {
        cvcError.style.display = "none"
        cardCvc.style.border = "2px solid hsl(270, 3%, 87%)";
        
    }

    if(
       nameError.style.display != "block" &&
       numberError.style.display != "block" &&
       expError.style.display != "block" &&
       cvcError.style.display != "block" 
    ) {
        document.querySelector(".form-section").style.display = "none";
        document.querySelector(".completed-state").style.display = "flex"
    }
});

completeBtn.addEventListener("click", () => {
    document.querySelector(".form-section").style.display = "flex";
    document.querySelector(".completed-state").style.display = "none";
    window.location.reload();
  });