angular.module("checkout").component("placedOrder",{
    templateUrl:"checkout/placedOrder.template.html",
    controller:['$rootScope','$scope','CheckoutService','$location',function($rootScope,$scope,CheckoutService,$location){
        if($rootScope.lastOrderId==undefined)
            $location.path("/myorder");
        console.log($rootScope.lastOrderId);
        $scope.transactionId=$rootScope.lastOrderId;
        $scope.transactionDetails=CheckoutService.getOrderFromId($rootScope.lastOrderId);
        $scope.totalCost=0;
        for(var i=0;i< $scope.transactionDetails.cartDetail.length;i++)
            $scope.totalCost+=$scope.transactionDetails.cartDetail[i].cost*$scope.transactionDetails.cartDetail[i].quantity;
        
            
        $scope.goToMyOrder=function(){
            $location.path("/myorder");
        }
        $scope.goToShop=function(){
            $location.path("/");
        }   
    }]
});