let cardNumber = document.getElementById("Number");
let cardName = document.getElementById("name");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvc = document.getElementById("cvc");

// Function that runs every time the input changes
function onNameChangeName() {
    console.log('Name changed to:', cardName.value);
    document.getElementById("cardName").innerHTML = cardName.value;
}

    cardName.addEventListener('input', onNameChangeName);

    function formatCardNumber(value) {
        var cleanValue = value.replace(/\D/g, ''); // Remove non-digits

    cleanValue = cleanValue.substring(0, 12);

    var formattedValue = '';

    // Loop to add spaces after every 4 digits
    for (let i = 0; i < cleanValue.length; i += 4) {
        var part = cleanValue.substring(i, Math.min(i + 4, cleanValue.length));
        formattedValue += part + (i < 8 ? ' ' : ''); // Add space except after the last group
    }

    return formattedValue.trim();
    }
    
    cardNumber.addEventListener('input', function () {
        var formattedValue = formatCardNumber(this.value);
        document.getElementById("cardNumber").textContent = formattedValue;
    });
    
    

    function formatCardNumber(value) {
        var cleanValue = value.replace(/\D/g, ''); // Remove non-digits
        var formattedValue = '';
    
        for (let i = 0; i < 16; i += 4) {
            var part = cleanValue.substring(i, i + 4);
            if (part.length < 4) {
                part = part.padEnd(4, '0'); // Pad with zeros
            }
            formattedValue += part + ' ';
        }
    
        return formattedValue.trim();
    }
    
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        var formattedValue = formatCardNumber(e.target.value);
        e.target.value = formattedValue;
        document.getElementById("displayCardNumber").innerHTML = formattedValue; // Display formatted value
    });
    
    function limitInput(input, maxLength) {
        if (input.value.length > maxLength) {
            input.value = input.value.slice(0, maxLength);
        }
    }
    
    month.addEventListener('input', function () {
        limitInput(this, 2); // Limit to 2 digits
        document.getElementById("cardMonth").textContent = this.value;
    });
    
    year.addEventListener('input', function () {
        limitInput(this, 2); // Limit to 2 digits
        document.getElementById("cardYear").textContent = this.value;
    });
    
    cvc.addEventListener('input', function () {
        limitInput(this, 3); // Limit to 3 digits
        document.getElementById("cardCvc").textContent = this.value;
    });
    

