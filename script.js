var input = $('#city');
var button = $('#submit');
button.on('click', function (){
    var cityName= input.val();
    var key = '19ad4402d0b34d51825115807170903';
    var days = '7';


    $.ajax({
        type: 'GET',
        url: 'https://api.apixu.com/v1/forecast.json?key='+ key +'&q='+ cityName +'&days='+days,
        success: function(data){
            console.log(data);

        }
    })
});

$("#city").keyup(function(event){
    if(event.keyCode == 13){
        $("#submit").click();
    }
});