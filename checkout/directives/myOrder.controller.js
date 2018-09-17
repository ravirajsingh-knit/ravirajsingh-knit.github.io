angular.module("checkout").controller("myOrder",['CheckoutService','AuthenticationService','$scope',function(CheckoutService,AuthenticationService,$scope){
    console.log("my trans ",AuthenticationService.getCurrentUser());
    $scope.mode=0;
    if(AuthenticationService.getCurrentUser()!="Guest"){
        $scope.orderDetails=CheckoutService.getUserOrder(AuthenticationService.getCurrentUser());
        $scope.mode=1;
    }
    else{
        $scope.mode=2;
        $scope.orderDetails=[];
    }
    console.log($scope.orderDetails)
    $scope.searchTransaction=function(transactionId){
        var order=CheckoutService.getOrder(transactionId);
        if(order==null)
            return;
        for(var i=0;i<$scope.orderDetails.length;i++){
            if($scope.orderDetails[i].transactionId==transactionId)
            return;
        }
        $scope.orderDetails.push(order);
        console.log( $scope.orderDetails)
    }
        
    
}]);