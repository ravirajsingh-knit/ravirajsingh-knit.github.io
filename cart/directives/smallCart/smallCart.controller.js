angular.module("cart")
.controller("smallCart",['DataFactory','$scope','$rootScope',function(DataFactory,$scope,$rootScope){
    //this.type="check";
    $scope.Cart=DataFactory.getCart();
    $scope.totalQuantity=0;
    $scope.totalAmount=0;  
    for(var i=0;i<$scope.Cart.length;i++){

        $scope.totalAmount+=$scope.Cart[i].quantity*$scope.Cart[i].cost;
        $scope.totalQuantity+=$scope.Cart[i].quantity*1;
    }
    
  
    $rootScope.$on("ChangeinCart",function(){
        $scope.Cart=DataFactory.getCart();
        $scope.totalAmount=0;
        $scope.totalQuantity=0;
        for(var i=0;i<$scope.Cart.length;i++){
            $scope.totalAmount+=$scope.Cart[i].quantity*$scope.Cart[i].cost;
            $scope.totalQuantity+=$scope.Cart[i].quantity*1;
        }
    });    
    //DataFactory.handelChange($scope,updateCart());  



}]);