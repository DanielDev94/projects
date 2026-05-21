const weeklyData = [
  { day: "Monday", openPrice: 1.052, closePrice: 1.058 },
  { day: "Tuesday", openPrice: 1.058, closePrice: 1.051 },
  { day: "Wednesday", openPrice: 1.051, closePrice: 1.051 },
  { day: "Thursday", openPrice: 1.051, closePrice: 1.062 },
  { day: "Friday", openPrice: 1.062, closePrice: 1.059 },
];

function runMarketAnalysis() {
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = "<h3>Weekly Breakdown:</h3>";

  let biggestMove = 0;
  let mostVolatileDay = "";

  for (let i = 0; i < weeklyData.length; i++) {
    let currentDay = weeklyData[i].day;
    let open = weeklyData[i].openPrice;
    let close = weeklyData[i].closePrice;

    if (open === close) {
      outputDiv.innerHTML += `<p>${currentDay}: FLAT (Doji). No movement.</p>`;
      continue;
    }

    let movement = Math.abs(close - open);

    if (movement > biggestMove) {
      biggestMove = movement;
      mostVolatileDay = currentDay;
    }

    if (close > open) {
      outputDiv.innerHTML += `<p class="bullish">${currentDay}: BULLISH (+${movement.toFixed(3)})</p>`;
    } else if (close < open) {
      outputDiv.innerHTML += `<p class="bearish">${currentDay}: BEARISH (+${movement.toFixed(3)})</p>`;
    }
  }

  outputDiv.innerHTML += `<hr><h4>Market Summary</h4>`;
  outputDiv.innerHTML += `<p>Most Volatile Day: <strong>${mostVolatileDay}</strong> (${biggestMove.toFixed(3)})</p>`;
}

document
  .getElementById("analyzeBtn")
  .addEventListener("click", runMarketAnalysis);
