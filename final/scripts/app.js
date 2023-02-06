
function weatherBalloon( cityID ) {
    var key = "582b55efa5e27910234adbbf3225cdad";
    fetch("https://api.openweathermap.org/data/2.5/weather?id=" + cityID+ "&appid=" + "582b55efa5e27910234adbbf3225cdad").then(function(resp) { 
        return resp.json() 
    }).then(function(data) {
      drawWeather(data);
    }).catch(function() {
      // catch any errors
    });
}
let option = document.querySelector("select");


if (option) option.addEventListener("change", (event) =>  {
    document.getElementById("weatherWidget").style.display = "block"
    if (event.target.value == "montclair"){     
        weatherBalloon( 5374232 );
        console.log("hey")}
    if (event.target.value == "upland"){
        weatherBalloon( 5404915 );}
    if (event.target.value == "ranchoCucamonga"){
        weatherBalloon( 5385955 );}
    if (event.target.value == "claremont"){
        weatherBalloon( 5337696 );}
    if (event.target.value == "losAngeles"){
        weatherBalloon( 5368361 );}
    if (event.target.value == "chino"){
        weatherBalloon( 5336545 );}
    if (event.target.value == "sanFrancisco"){
        weatherBalloon( 5391959 );}
    if (event.target.value == "sanDiego"){
        weatherBalloon( 5391811 );} 
})





function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	//document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById("temp").innerHTML = fahrenheit + "&deg;";
	document.getElementById("location").innerHTML = d.name;
}
