function calculateLoan() {
    var principal = parseFloat(document.getElementById('amount').value);
    var interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    var years = parseFloat(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(years)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    var nPayments = years * 12;
    var monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -nPayments));
    var totalPayment = monthlyPayment * nPayments;
    var totalInterest = totalPayment - principal;

    document.getElementById('payment-details').innerHTML = 
        "<p>Mensualidad: $" + monthlyPayment.toFixed(2) + "</p>" +
        "<p>Total pagado al final del préstamo: $" + totalPayment.toFixed(2) + "</p>" +
        "<p>Total de intereses pagados: $" + totalInterest.toFixed(2) + "</p>";
}

