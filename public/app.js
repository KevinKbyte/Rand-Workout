'use strict';

(function () {
    angular
        .module("RandWorkoutApp", [])
        .controller("WorkoutController", WorkoutController);

    // scope accesses the html, listens to the createPost() of the ng-click 
    // scope service/interface, receive/handle events
    function WorkoutController($scope, $http) {
        $scope.createPost = createPost;

        function createPost(post) {
            console.log("It works!",  post);
           
            ///api or /rest is where you usually post things
            $http.post("/api/post", post); // sends data to the server, post creates new content
            

        }
    }

})();
    
