(function () {
'use strict';


  angular.module('LunchChecker2000', [])

  .controller('LunchCheckerCtrl', function ($scope, $filter) {

    $scope.lunchItems = "";
    $scope.totalLunchItems = 0;

    $scope.slpitLunchItems = function () {
      var totalLunchValue = calculateForSplitLunchItems($scope.lunchItems);
      $scope.totalLunchItems = totalLunchValue;
    };


    function calculateForSplitLunchItems(string) {
      var arrayOfLunches = string.split(",");
      var lunchCount = arrayOfLunches.length;


      return lunchCount;
    
    };


    // $scope.sayEnjoyMsg = function () {
    //   return "Enjoy!"
    // };
    // $scope.sayToMuchMsg = function () {
    //   return "Too Much!"
    // };

  // function splitString($scope.lunchItems, ,) {
  //   var arrayOfLunches = $scope.lunchItems.split(,);
  //
  //   console.log('Lunch Items are: ' + $scope.lunchItems)
  //   console.log('Array of: ' + arrayOfLunches)
  // };

  });



})();
