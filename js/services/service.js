angular.module('movement').service('service', function($http) {
    

this.apiCall = function (searchTerm){
    return $http ({
        method: 'GET',
        url: 'https://api.unsplash.com/photos/random?client_id=6467c34909d243d7c365ed95f643443b2e733ecfe0bac3be23a924cb98bfa89c&orientation=landscape' + '&query=' + searchTerm,
        headers: {
            'Accept-Version': 'v1'
        }
    })
}



this.weatherCall = function (coordinates){
    return $http ({
        method: 'GET',
        url: 'https://api.darksky.net/forecast/d90369b5ef37b9401bddc2e14747f930/' + coordinates
    })
}


this.locationCall = function (){
    return $http ({
        method: 'GET',
        url: 'http://ip-api.com/json'
    })
}


})



// https://api.darksky.net/forecast/d90369b5ef37b9401bddc2e14747f930/37.8267,-122.4233

// d90369b5ef37b9401bddc2e14747f930

