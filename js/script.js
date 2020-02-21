// accordeon

$(".faq_container").click(function() {
    $(".faq_container").not(this).removeClass("expanded");
    $(this).toggleClass("expanded");
  });

// menu

$(function() {
  $(".sandwich_menu").on('click', function (){
    $(".header_nav").slideToggle(300, function() {
      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
});

//scroll

let prev = 0;
let $window = $(window);
let nav = $('header');

$window.on('scroll', function(){
  let scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});
// weather//

var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
fetch('http://api.openweathermap.org/data/2.5/weather?id=689558&appid=3cc02896687a4a94801a32c7cd2257b1')
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    document.querySelector(".weather_header_icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector(".weather_header_date").innerHTML = d + ', ' + data.name + ', ' + data.sys.country;
    document.querySelector(".temperature_value").innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector(".temperature_discription").textContent = data.weather[0]['main'];
    document.querySelector(".temperature_weather_icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector(".weather_pressure").innerHTML = `<img src="img/Layer_1.png">` + Math.round(data.main.pressure*0.00750063755419211*100) + ' mm/h';
    document.querySelector(".weather_humidity").innerHTML = `<img src="img/Layer_3.png">` + data.main.humidity + ' mph';
    document.querySelector(".weather_wind").innerHTML = `<img src="img/Layer_2.png">` + data.wind.speed.toFixed(1) + ' m/s';

  })
  .catch(function () {

  });
