angular.module("product")
.controller("productCard",['CartService','$scope','$timeout',function(CartService,$scope,$timeout){
    $scope.showMessage = true;
        
    $scope.getMessage = function() {
              $scope.showMessage = false;
              $timeout(function() {
                 $scope.showMessage = true;
              }, 3000);
              
    };



    $scope.addToCart=function(id,quantity){
        console.log(id,quantity);
        if(quantity>0){
            CartService.addToCart(id,quantity);
            $scope.getMessage(); 
        }
    }




}]);
