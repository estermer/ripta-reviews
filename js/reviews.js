(function(){
  var app = angular.module('ripta-reviews', []);
  console.log(app);
  app.controller('ReviewsCtrl', function($scope, $http){
    $scope.readReviews = false;

    $scope.goToReviewsList = function(){
      $scope.readReviews = true;

      $http.get('/reviews')
        .then(function(res){
          $scope.reviewsList = res.data.reviews;
        })
        .catch(function(err){
          console.log(err);
        });
    };

  });
})();
