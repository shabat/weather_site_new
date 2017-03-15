var input = $('#city');
var button = $('#submit');
var cityName = 'auto:ip';
button.on('click', function (){
    cityName= input.val();
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
        }
    })
});

$(function () {
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
        }
    })
});

input.keyup(function(event){
    if(event.keyCode == 13){
        $("#submit").click();
    }
});

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
