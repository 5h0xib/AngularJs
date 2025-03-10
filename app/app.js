var myApp = angular.module("myApp",['ngRoute','ngAnimate']);

// before app runs
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

    //$locationProvider.html5Mode(true);

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'AppController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
    .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController'
    })
    .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'AppController'
    })
    .otherwise({
        redirectTo: '/home'
    });

}]);


// // after the app runs
// myApp.run(function(){
//     //code
// });


myApp.directive('randomSong', [function() {
    return {
        restrict: 'E',
        scope: {
            arr: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 8);
        }
    };
}]);


myApp.controller('AppController', ['$scope','$http', function($scope,$http){

    $scope.del = function(arrays){
        var deletedarrays = $scope.arr.indexOf(arrays);
        $scope.arr.splice(deletedarrays, 1)
    }

    $scope.addData = function() {
        if ($scope.newData && $scope.newData.name && $scope.newData.rate) {
            $scope.arr.push({
                name: $scope.newData.name,
                rate: parseInt($scope.newData.rate),
                color: $scope.newData.color,
                available: true
            });
    
            $scope.newData = {};
    
            setTimeout(function() {
                window.location.href = "prank.html";
            }, 4000);
    
        } else {
            alert("Please fill out the fields.");
        }
    };

    $scope.removeAll = function() {
        $scope.arr = [];
    };
    
    $http.get('data/arr.json')
    .then(function(response) {
        $scope.arr = response.data;
    })
    .catch(function(error) {
        console.error("Error loading data:", error);
    });

    console.log(angular.toJson($scope.arr));

}]);



myApp.controller('ContactController', ['$scope','$location', function($scope,$location){

    $scope.sendMessage = function(){
        $location.path('/contact-success');
    };

}]);
