function calculateLoan() {
    const principal = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value);
    const nPayments = years * 12;

    const monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -nPayments));
    const totalPayment = monthlyPayment * nPayments;
    const totalInterest = totalPayment - principal;

    document.getElementById('payment-details').innerHTML = `
        <p>Mensualidad: $${monthlyPayment.toFixed(2)}</p>
        <p>Total pagado al final del préstamo: $${totalPayment.toFixed(2)}</p>
        <p>Total de intereses pagados: $${totalInterest.toFixed(2)}</p>
    `;
}
