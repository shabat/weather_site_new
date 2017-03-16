var input = $('#city');
var button = $('#submit');
var ip = 'auto:ip';
var forecastArr = [];
var daysArr = [];
var line = $('#line');
var points = line.attr('points');
var mappedPoints = [];
var mappedCount = 0;

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

            var i = 0; var j=0;
            var widthBotCanvas = parseInt($('#lineChart').css('width'));
            var heightBotCanvas = parseInt($('#lineChart').css('height'));
            var step = Math.round(widthBotCanvas/7);
            while(i<7){
                forecastArr.push(data.forecast.forecastday[i].day.avgtemp_c);
                i++;
                daysArr.push(Math.round((step*i)-(step/2)));

            }
            console.log(daysArr, forecastArr);
            while(j<7){
                map(forecastArr[j], Math.max.apply(null,forecastArr),Math.min.apply(null,forecastArr), 10, heightBotCanvas-10 );
                j++;
            }
            console.log(mappedPoints);

                points = ''+daysArr[0]+','+mappedPoints[0] +' '+daysArr[1]+','+ mappedPoints[1]+' '+daysArr[2]+','+ mappedPoints[2]+' '+daysArr[3]+','+ mappedPoints[3]+' '+daysArr[4]+','+ mappedPoints[4]+' '+daysArr[5]+','+ mappedPoints[5]+' '+daysArr[6]+','+ mappedPoints[6]+' ';
            console.log(points);
            $('#line').attr('points', points);
            mappedCount = 0; daysArr = []; forecastArr = [];
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
}
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
*/
