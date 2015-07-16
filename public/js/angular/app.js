var app = angular.module('undefinedApp', []);

// app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
//   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//     $location.hash($routeParams.scrollTo);
//     $anchorScroll();  
//   });
// });

app.controller('UndefinedCtrl', ['$scope', function ($scope) {

	//$scope.currencySign = '€';

  $scope.layers = [
    { name: 'battery', price: 150 },
    { name: 'speaker', price: 75 },
    { name: 'lighting', price: 35 }
  ];

  $scope.firstLayer = $scope.layers[0];
  $scope.secondLayer = $scope.layers[1];
  $scope.thirdLayer = $scope.layers[2];

  $scope.totalPrice = $scope.firstLayer.price + $scope.secondLayer.price + $scope.thirdLayer.price;
  
  $scope.changeLayer = function (num) {
    console.log($scope.firstLayer)
    console.log($scope.secondLayer)
    console.log($scope.thirdLayer)
    $scope.totalPrice = $scope.firstLayer.price + $scope.secondLayer.price + $scope.thirdLayer.price;
  };
}]);