var myApp = angular.module("myApp", []);

// // before app runs
// myApp.config(function(){
//     //code
// });


// // after the app runs
// myApp.run(function(){
//     //code
// });


myApp.controller('AppController', ['$scope', function($scope){

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
        } else {
            alert("Please fill out the fields.");
        }
    };

    $scope.arr = [
        {
            name:'Cheir cheri lady',
            rate:25,
            color:'green',
            available:true
        },
        {
            name:'Dancin(Krono Remix)', 
            rate:6,
            color:'blue',
            available:true
        },
        {
            name:'Dusk till dawn', 
            rate:5,
            color:'aqua',
            available:true
        },
        {
            name:"Gansta's Parradise",
            rate:70,
            color:'black',
            available:true
        },
        {
            name:'Not like us',
            rate:80,
            color:'pink',
            available:true
        },
        {
            name:'The Spectre',
            rate:50,
            color:'red',
            available:true
        },
        {
            name:'The Box',
            rate:10,
            color:'purple',
            available:true
        },
        {
            name:'KEEP UP',
            rate:60,
            color:'cyan',
            available:true
        },
    ];
}]);