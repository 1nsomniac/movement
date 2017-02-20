angular.module('movement').controller('homeController', function($state, $scope, service, $stateParams) {
    
$scope.apiCall = function(searchTerm){
    service.apiCall(searchTerm).then(function(results){
      

        $scope.apiData = results.data

        $scope.weatherColor = "#" + invertHex(results.data.color.substring(1))
        console.log($scope.weatherColor)
        var backgroundUrl = "url(" + $scope.apiData.urls.full + ")"

        var icons = new Skycons({"color": $scope.weatherColor}),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;

      for(i = list.length; i--; )
        icons.set(list[i], list[i]);

      icons.play();

$scope.img = {
        "background": backgroundUrl,
        "font-size" : "12px",
        "width": "100vw",
    "background-size": "cover",
    "height": "100vh",
    "background-position": "center",
    }
    })
}
$scope.hello = 'hello'
$scope.apiCall("sunrise")

$scope.locationCall = function(){
    service.locationCall().then(function(results){
        $scope.location = results.data.lat + "," + results.data.lon
        
        // console.log(results)
        console.log($scope.location)
        $scope.weatherCall($scope.location)
    })
}

$scope.locationCall()

$scope.weatherCall = function(coordinates){
    service.weatherCall(coordinates).then(function(results){
        $scope.weatherData = results.data
        console.log(results)
    })
}


console.log('hello')

// + for north - for south, + for east - for west

// window.onload = function() {
//   var startPos;
//   var geoSuccess = function(position) {
//     startPos = position;
//     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//     document.getElementById('startLon').innerHTML = startPos.coords.longitude;

//     console.log(startPos)
//     console.log('got here')
//   };
//   navigator.geolocation.getCurrentPosition(geoSuccess);
// };

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };


// function success(pos) {
//   var crd = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// };

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// };

// navigator.geolocation.getCurrentPosition(success, error, options);




//  var http = require("http")
//  var terminal = require("web-terminal");
 
    // var app = http.createServer(function (req, res) {
    //     res.writeHead(200, {"Content-Type": "text/plain"});
    //     res.end("Hello World\n");
    // });
    
    // app.listen(1337);
    // console.log("Server running at http://127.0.0.1:1337/");

    // terminal(app);
    // console.log("Web-terminal accessible at http://127.0.0.1:1337/terminal");
    




function invertHex(hexnum){
  if(hexnum.length != 6) {
    alert("Hex color must be six hex numbers in length.");
    return false;
  }
	
  hexnum = hexnum.toUpperCase();
  var splitnum = hexnum.split("");
  var resultnum = "";
  var simplenum = "FEDCBA9876".split("");
  var complexnum = new Array();
  complexnum.A = "5";
  complexnum.B = "4";
  complexnum.C = "3";
  complexnum.D = "2";
  complexnum.E = "1";
  complexnum.F = "0";
	
  for(var i=0; i<6; i++){
    if(!isNaN(splitnum[i])) {
      resultnum += simplenum[splitnum[i]]; 
    } else if(complexnum[splitnum[i]]){
      resultnum += complexnum[splitnum[i]]; 
    } else {
      alert("Hex colors must only include hex numbers 0-9, and A-F");
      return false;
    }
  }
	
  return resultnum;
}



})


