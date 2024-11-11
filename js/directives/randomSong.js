myApp.directive('randomSong', function() {
    return {
        restrict: 'E',
        scope: {
            arrays: '=',
            title: '@'
        },
        template: `
            <div class="random-song">
                <h2>{{title}}</h2>
                <p ng-if="randomSong">
                    <strong>{{randomSong.title}}</strong> by {{randomSong.artist}}
                </p>
                <button ng-click="getRandomSong()">Get Another Random Song</button>
            </div>
        `,
        controller: function($scope) {
            $scope.getRandomSong = function() {
                if ($scope.arrays && $scope.arrays.length > 0) {
                    var randomIndex = Math.floor(Math.random() * $scope.arrays.length);
                    $scope.randomSong = $scope.arrays[randomIndex];
                }
            };

            // Initialize with a random song
            $scope.getRandomSong();
        }
    };
});