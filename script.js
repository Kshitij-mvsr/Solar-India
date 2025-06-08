document.getElementById('calcForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    let energyConsumption = parseFloat(document.getElementById('energyConsumption').value);
    let solarCost = parseFloat(document.getElementById('solarCost').value);
    let installationFee = parseFloat(document.getElementById('installationFee').value);
    let rebate = parseFloat(document.getElementById('rebate').value);
    let electricityRate = parseFloat(document.getElementById('electricityRate').value);

    // Validate inputs
    if (isNaN(energyConsumption) || isNaN(solarCost) || isNaN(installationFee) || isNaN(rebate) || isNaN(electricityRate)) {
        alert("Please enter valid values in all fields.");
        return;
    }

    // Calculate values
    let monthlyEnergyCost = energyConsumption * electricityRate;
    let netSolarCost = solarCost + installationFee - rebate;
    let monthlySavings = monthlyEnergyCost;
    let roi = (netSolarCost / (monthlySavings * 12)) * 100;

    // Display results
    document.getElementById('monthlySavings').textContent = Monthly Savings: ₹${monthlySavings.toFixed(2)};
    document.getElementById('roi').textContent = ROI: ${roi.toFixed(2)}%;
});