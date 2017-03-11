const CHART = document.getElementById('lineChart');
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            showScale: false,
            fill: false,
            lineTension: 0,
            backgroundColor: "#fff",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderWidth: 5,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 15,
            pointHoverRadius: 15,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
},

});
