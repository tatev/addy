var app = angular.module('undefinedApp', []);

app.controller('UndefinedCtrl', ['$scope', function ($scope) {

	//$scope.currencySign = '€';

  $scope.layers = [
    { name: 'battery', price: 40, img: '/img/addy_3.png' },
    { name: 'speaker', price: 75, img: '/img/addy_2.png' },
    { name: 'lighting', price: 35, img: '/img/addy_1.png' }
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