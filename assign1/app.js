(function () {
'use strict';


  angular.module('LunchChecker2000', [])

  .controller('LunchCheckerCtrl', function ($scope, $filter) {

    $scope.lunchItems = "";
    $scope.totalLunchItems = 0;
    $scope.sayMsg ="";

    $scope.slpitLunchItems = function () {
      var totalLunchValue = calculateForSplitLunchItems($scope.lunchItems);
      $scope.totalLunchItems = totalLunchValue;
    };


    function calculateForSplitLunchItems(string) {
      var arrayOfLunches = string.split(",");
      var lunchCount = arrayOfLunches.length;
      if (lunchCount == 0) {
        $scope.sayMsg = "Please enter data first"
      } else if (lunchCount < 3 && lunchCount != 0) {
        $scope.sayMsg = "Enjoy!"
      } else {
        $scope.sayMsg = "Too much!"
      }
      return lunchCount
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
