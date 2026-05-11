let incidentLogs;
let savedReports = localStorage.getItem("myIncidents");
if (savedReports != null) {
  incidentLogs = JSON.parse(savedReports);
} else {
  incidentLogs = [];
}

let reportInput = document.getElementById("report-input");
let submitReportButton = document.getElementById("submit-report-btn");
let totalCount = document.getElementById("total-count");
let latestReport = document.getElementById("latest-report");

totalCount.textContent = `${incidentLogs.length}`;
if (incidentLogs.length > 0) {
  latestReport.textContent = incidentLogs[incidentLogs.length - 1];
}

submitReportButton.addEventListener("click", function () {
  let typedText = reportInput.value;
  incidentLogs.push(typedText);

  let wrappedArray = JSON.stringify(incidentLogs);
  localStorage.setItem("myIncidents", wrappedArray);

  reportInput.value = "";
  totalCount.textContent = `${incidentLogs.length}`;
  latestReport.textContent = typedText; // incidentLogs[incidentLogs.length - 1]: This can replace typedText
});
