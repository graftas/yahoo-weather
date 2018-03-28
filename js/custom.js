$(document).ready(function(){
    var data;
    var sehir = "izmir";
    var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + sehir + "') and u='c'"

    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json").success(function(object){
        data = object.query.results.channel;
        $('#weather span').remove();
        $('<h4>').text('City: ' + data.location.city).appendTo('#weather');
        $('<h4>').text('Lat: ' + data.item.lat).appendTo('#weather');
        $('<h4>').text('Long: ' + data.item.long).appendTo('#weather');
        $('<h4>').text('Temperature: ' + data.units.temperature).appendTo('#weather');
        $('<h4>').text('Temp: ' + data.item.condition.temp).appendTo('#weather');
        $('<h4>').text('Wind Chill: ' + data.wind.chill).appendTo('#weather');
        $('<h4>').text('Wind Direction: ' + data.wind.direction).appendTo('#weather');
        $('<h4>').text('Wind Speed: ' + data.wind.speed).appendTo('#weather');
        $('<h4>').text('Sunrise: ' + data.astronomy.sunrise).appendTo('#weather');
        $('<h4>').text('Sunset: ' + data.astronomy.sunset).appendTo('#weather');

        $.each(data.item.forecast, function(index, element) {
            if (index < 7) {
                $('#weather').append('<div>' + setWeatherIcon(element.code) + ' <span>' + element.text + '</span></div>');
                if (index == 0) $('#weather div').css('margin-top', '20px');
            }
        });
    });

    function setWeatherIcon(code) {
        switch(code) {
            case '0':  var icon  = '<i class="wi wi-tornado"></i>'; break;
            case '1':  var icon  = '<i class="wi wi-storm-showers"></i>'; break;
            case '2':  var icon  = '<i class="wi wi-tornado"></i>'; break;
            case '3':  var icon  = '<i class="wi wi-thunderstorm"></i>'; break;
            case '4':  var icon  = '<i class="wi wi-thunderstorm"></i>'; break;
            case '5':  var icon  = '<i class="wi wi-snow"></i>'; break;
            case '6':  var icon  = '<i class="wi wi-rain-mix"></i>'; break;
            case '7':  var icon  = '<i class="wi wi-rain-mix"></i>'; break;
            case '8':  var icon  = '<i class="wi wi-sprinkle"></i>'; break;
            case '9':  var icon  = '<i class="wi wi-sprinkle"></i>'; break;
            case '10': var icon  = '<i class="wi wi-hail"></i>'; break;
            case '11': var icon  = '<i class="wi wi-showers"></i>'; break;
            case '12': var icon  = '<i class="wi wi-showers"></i>'; break;
            case '13': var icon  = '<i class="wi wi-snow"></i>'; break;
            case '14': var icon  = '<i class="wi wi-storm-showers"></i>'; break;
            case '15': var icon  = '<i class="wi wi-snow"></i>'; break;
            case '16': var icon  = '<i class="wi wi-snow"></i>'; break;
            case '17': var icon  = '<i class="wi wi-hail"></i>'; break;
            case '18': var icon  = '<i class="wi wi-hail"></i>'; break;
            case '19': var icon  = '<i class="wi wi-cloudy-gusts"></i>'; break;
            case '20': var icon  = '<i class="wi wi-fog"></i>'; break;
            case '21': var icon  = '<i class="wi wi-fog"></i>'; break;
            case '22': var icon  = '<i class="wi wi-fog"></i>'; break;
            case '23': var icon  = '<i class="wi wi-cloudy-gusts"></i>'; break;
            case '24': var icon  = '<i class="wi wi-cloudy-windy"></i>'; break;
            case '25': var icon  = '<i class="wi wi-thermometer"></i>'; break;
            case '26': var icon  = '<i class="wi wi-cloudy"></i>'; break;
            case '27': var icon  = '<i class="wi wi-night-cloudy"></i>'; break;
            case '28': var icon  = '<i class="wi wi-day-cloudy"></i>'; break;
            case '29': var icon  = '<i class="wi wi-night-cloudy"></i>'; break;
            case '30': var icon  = '<i class="wi wi-day-cloudy"></i>'; break;
            case '31': var icon  = '<i class="wi wi-night-clear"></i>'; break;
            case '32': var icon  = '<i class="wi wi-day-sunny"></i>'; break;
            case '33': var icon  = '<i class="wi wi-night-clear"></i>'; break;
            case '34': var icon  = '<i class="wi wi-day-sunny-overcast"></i>'; break;
            case '35': var icon  = '<i class="wi wi-hail"></i>'; break;
            case '36': var icon  = '<i class="wi wi-day-sunny"></i>'; break;
            case '37': var icon  = '<i class="wi wi-thunderstorm"></i>'; break;
            case '38': var icon  = '<i class="wi wi-thunderstorm"></i>'; break;
            case '39': var icon  = '<i class="wi wi-thunderstorm"></i>'; break;
            case '40': var icon  = '<i class="wi wi-storm-showers"></i>'; break;
            case '41': var icon  = '<i class="wi wi-snow"></i>'; break;
            case '42': var icon  = '<i class="wi wi-snow"></i>'; break;
            case '43': var icon  = '<i class="wi wi-snow"></i>'; break;
            case '44': var icon  = '<i class="wi wi-cloudy"></i>'; break;
            case '45': var icon  = '<i class="wi wi-lightning"></i>'; break;
            case '46': var icon  = '<i class="wi wi-snow"></i>'; break;
            case '47': var icon  = '<i class="wi wi-thunderstorm"></i>'; break;
            case '3200': var icon  =  '<i class="wi wi-alien"></i>'; break;
            default: var icon  =  '<i class="wi wi-cloud"></i>'; break;
        }
        return icon;
    }
});
