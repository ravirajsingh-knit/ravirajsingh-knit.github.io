angular.module("product")
.controller("productCard",['CartService','$scope','$timeout','AuthenticationService',function(CartService,$scope,$timeout,AuthenticationService){
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
            CartService.addToCart(AuthenticationService.getCurrentUserCartId(),id,quantity);
            $scope.getMessage(); 
        }
    }




}]);
