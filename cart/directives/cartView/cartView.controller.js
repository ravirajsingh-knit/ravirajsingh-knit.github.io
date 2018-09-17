angular.module("cart").controller("cartView",['$scope','CartService','AuthenticationService',
    function($scope,CartService,AuthenticationService){

        $scope.removeFromCart=function(id){
            console.log("local controller remove command");
            CartService.removeFromCart(AuthenticationService.getCurrentUserCartId(),id);
        }
        $scope.updateCart=function(id,quantity){
            console.log("service update command");
            CartService.updateCart(AuthenticationService.getCurrentUserCartId(),id,quantity);
        }

    }
]);