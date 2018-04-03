var requests = 0;

document.getElementById("button").addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(xhttp.responseText).data.currentStatistics);
        requests++;


        var statistics = JSON.parse(xhttp.responseText).data.currentStatistics;

        var date = new Date(statistics.time*1000);

        var table = document.getElementById("table");

        var row = table.insertRow();

        var th = document.createElement("th");
        th.innerHTML = requests;
        row.appendChild(th);

        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);

        cell1.innerHTML = statistics.activeWorkers;
        cell2.innerHTML = (statistics.unpaid * 1e-9).toFixed(5);
        cell3.innerHTML = (statistics.unconfirmed * 1e-9).toFixed(5);
        cell4.innerHTML = statistics.currentHashrate.toFixed(0);
        cell5.innerHTML = date.toLocaleString();
        cell6.innerHTML = statistics.validShares;
      }
    };
    xhttp.open(
      "GET",
      "https://api-zcash.flypool.org/miner/:t1fyR14HLL5BH5M6UkFUKRqPjfEsyVroH77/dashboard",
      true
    );
    xhttp.send();
  });