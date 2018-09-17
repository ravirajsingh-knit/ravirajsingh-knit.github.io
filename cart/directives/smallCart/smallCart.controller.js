angular.module("cart")
.controller("smallCart",['CartService','$scope','$rootScope','AuthenticationService',function(CartService,$scope,$rootScope,AuthenticationService){
    //this.type="check";
    $scope.Cart=CartService.getCart(AuthenticationService.getCurrentUserCartId());
    $scope.totalQuantity=0;
    $scope.totalAmount=0;  
    for(var i=0;i<$scope.Cart.length;i++){

        $scope.totalAmount+=$scope.Cart[i].quantity*$scope.Cart[i].cost;
        $scope.totalQuantity+=$scope.Cart[i].quantity*1;
    }
    
  
    $rootScope.$on("ChangeinCart",function(){
        console.log("Change in cart",CartService.getCart(AuthenticationService.getCurrentUserCartId()));
        $scope.Cart=CartService.getCart(AuthenticationService.getCurrentUserCartId());
        $scope.totalAmount=0;
        $scope.totalQuantity=0;
        for(var i=0;i<$scope.Cart.length;i++){
            $scope.totalAmount+=$scope.Cart[i].quantity*$scope.Cart[i].cost;
            $scope.totalQuantity+=$scope.Cart[i].quantity*1;
        }
    });    
    //CartService.handelChange($scope,updateCart());  



}]);