function calculateTip() {
    const billInput = document.getElementById("billAmount").value;
    const tipInput = document.getElementById("tipPercent").value;

    const bill = parseFloat(billInput);
    const tipPercent = parseFloat(tipInput);

    const tipAmountElement = document.getElementById("tipAmount");
    const totalAmountElement = document.getElementById("totalAmount");

    if(isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
        tipAmountElement.textContent = "Tip: $0.00";
        totalAmountElement.textContent = "Total: $0.00";
        alert("Please enter valid bill and tip values.");
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const totalAmount = bill + tipAmount;

    tipAmountElement.textContent = `Tip: $${tipAmount.toFixed(2)}`;
    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}
