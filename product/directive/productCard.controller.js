angular.module("product")
.controller("productCard",['DataFactory','$scope','$timeout',function(DataFactory,$scope,$timeout){
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
            DataFactory.addToCart(id,quantity);
            $scope.getMessage(); 
        }
    }




}]);
