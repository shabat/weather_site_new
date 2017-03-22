var input = $('#city');
var button = $('#submit');
var ip = 'auto:ip';
var forecastArr = [], dayForecast = [];

Chart.defaults.global.defaultFontColor='white';
var ctx = $("#myChart");

function map (value, minRange, maxRange, newMinRange, newMaxRange){
    mappedPoints[mappedCount]=Math.round((((value - minRange) / (maxRange - minRange)) * (newMaxRange - newMinRange) + newMinRange));
    mappedCount++;
}

button.on('click', function (){
    cityName= input.val();
    getweather(cityName);
});

function getweather (cityName) {
    var key = '19ad4402d0b34d51825115807170903';
    var days = '7';

    $.ajax({
        type: 'GET',
        url: 'https://api.apixu.com/v1/forecast.json?key='+ key +'&q='+ cityName +'&days='+days,
        success: function(data){
            console.log(data);
            $('#country').html(data.location.country);
            $('#temp').html(data.current.temp_c +'&deg;C');
            $('#town').html(data.location.name);
            $('#tdate').html(data.location.localtime);
            $('#condition').html(data.current.condition.text);

            for(var i=0, j=0; i<7, j<=24; i++, j+=4){
                forecastArr.push(data.forecast.forecastday[i].day.avgtemp_c);
                if (j == 24){
                    dayForecast.push(data.forecast.forecastday[0].hour[23].temp_c);
                }
                else{
                    dayForecast.push(data.forecast.forecastday[0].hour[j].temp_c);

                }
            }
            console.log(forecastArr,dayForecast);

            var ctx = document.getElementById("dayChart");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["0pm", "4am", "8am", "12am", "16pm", "20pm", "23pm"],
                    datasets: [{
                        label: 'day forecast',
                        data: dayForecast,
                        fill: false,
                        backgroundColor: [
                            'rgba(255, 255, 255, 1)'
                        ],
                        borderColor: [
                            'rgba(255,255,255,0.5)'
                        ]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:true,
                                color: "rgba(0, 255 255, 1)"
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:false,
                                color: "rgba(0, 255 255, 1)"
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem) {
                                console.log(tooltipItem)
                                return tooltipItem.yLabel;
                            }
                        }
                    }
                }
            });

            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
                    defaultFontColor: '#fff',
                    datasets: [{
                        label: 'weekly forecast',
                        data: forecastArr,
                        fill: false,
                        backgroundColor: [
                            'rgba(255, 255, 255, 1)'
                        ],
                        borderColor: [
                            'rgba(255,255,255,0.5)'
                        ]
                    }]
                },
                options: {
                    legend: {
                        display: false,
                    },

                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem) {
                                console.log(tooltipItem)
                                return tooltipItem.yLabel;
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:true,
                                color: "rgba(0, 255 255, 1)"
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:true,
                                color: "rgba(0, 255 255, 1)"
                            }
                        }]
                    }
                }


            });


            forecastArr = []; dayForecast = [];

        }
    })
}


$(function(){getweather(ip)});

input.keyup(function(event){
    if(event.keyCode == 13){
        $("#submit").click();
    }
});


// When ready...
window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);
});

function toggleFullScreen() {
    document.documentElement.requestFullscreen();
};








/*
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }
        function showPosition(position) {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        }
        getLocation();

 points += ''+daysArr[j]+','+mappedPoints[j]+' ';
 linechart.append('<text'+' '+'x="'+ daysArr[j]+'"'+' '+ 'y="'+mappedPoints[j]+'"' +'>'+ forecastArr[j]+ '</text>' );



 <svg   id="lineChart" >
 <g>
 <polyline id="line" points="20,20 200,200" style="fill:none; stroke:white; stroke-width:3"/>
 </g>
 </svg>
 <div id="days">
 <ul>
 <li>mon</li>
 <li>tue</li>
 <li>wed</li>
 <li>thu</li>
 <li>fri</li>
 <li>sat</li>
 <li>sun</li>
 </ul>
 </div>
 */


