let coins = localStorage.getItem("coins") || 0;
let claimed = localStorage.getItem("bonus") || "no";

updateUI();

function updateUI() {
  document.getElementById("points").innerText = coins + " Coins";
  document.getElementById("walletCoins").innerText = coins;
}

function earn() {
  coins = Number(coins) + 10;
  localStorage.setItem("coins", coins);
  updateUI();
}

function dailyBonus() {
  if (claimed === "yes") {
    alert("Daily bonus already claimed");
    return;
  }
  coins = Number(coins) + 50;
  localStorage.setItem("coins", coins);
  localStorage.setItem("bonus", "yes");
  claimed = "yes";
  updateUI();
  alert("+50 Coins Added");
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
