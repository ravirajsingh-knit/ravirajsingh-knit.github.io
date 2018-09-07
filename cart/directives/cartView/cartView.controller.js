angular.module("cart").controller("cartView",['$scope','DataFactory',
    function($scope,DataFactory){

        $scope.removeFromCart=function(id){
            console.log("local controller remove command");
            DataFactory.removeFromCart(id);
        }
        $scope.updateCart=function(id,quantity){
            console.log("service update command");
            DataFactory.updateCart(id,quantity);
        }

    }
]);