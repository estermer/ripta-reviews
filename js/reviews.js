(function(){
  var app = angular.module('ripta-reviews', []);
  console.log(app);
  app.controller('ReviewsCtrl', function($scope, $http){
    $scope.readReviews = false;

    $scope.goToReviewsList = function(){
      $scope.readReviews = true;

      $http.get('https://pure-journey-38273.herokuapp.com/results.json')
        .then(function(res){
          $scope.comments = res.data["Add Any Additional Comments"];
          $scope.cleanAvg = averageStars(res.data["Cleanliness"]);
          $scope.friendAvg = averageStars(res.data["Friendliness"]);
          $scope.expAvg = averageStars(res.data["Overall Experience"]);
          $scope.timeAvg = averageStars(res.data["Timeliness"]);
          $scope.safeAvg = averageStars(res.data["Safety"]);
        })
        .catch(function(err){
          console.log(err);
        });
    };

    function averageStars(resultsArr){
      var count = 0;
      for(var i = 0; i < resultsArr.length; i++){
        count += Number(resultsArr[i]);
      }
      return count/resultsArr.length;
    };

    $scope.doTheBack = function() {
      console.log("going back");
      if(!$scope.readReviews){
      
      } else {
        $scope.readReviews = !$scope.readReviews;
        setTimeout(function(){
          loadMap();
        },100)
      }
    };
  });
})();
