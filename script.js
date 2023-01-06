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

//Wrapper element to validate and submit form.
const btn = document.querySelector('.btn');

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