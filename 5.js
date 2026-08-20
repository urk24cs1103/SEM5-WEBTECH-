
document.getElementById("calcBtn").addEventListener("click", calculateInvestment);

function calculateInvestment() {
    var principal = parseFloat(document.getElementById("principal").value) || 0;
    var annualRate = parseFloat(document.getElementById("rate").value) / 100 || 0;
    var years = parseInt(document.getElementById("years").value) || 0;
    var futureValue = principal * Math.pow(1 + annualRate, years);
    var profit = futureValue - principal;
    document.getElementById("totalBalance").innerHTML = "$" + futureValue.toFixed(2);
    document.getElementById("totalProfit").innerHTML = "$" + profit.toFixed(2);
}