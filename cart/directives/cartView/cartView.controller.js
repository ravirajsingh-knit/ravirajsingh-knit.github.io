angular.module("cart").controller("cartView",['$scope','CartService',
    function($scope,CartService){

        $scope.removeFromCart=function(id){
            console.log("local controller remove command");
            CartService.removeFromCart(id);
        }
        $scope.updateCart=function(id,quantity){
            console.log("service update command");
            CartService.updateCart(id,quantity);
        }

    }
]);