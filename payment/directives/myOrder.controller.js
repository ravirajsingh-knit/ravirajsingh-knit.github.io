angular.module("payment").controller("myOrder",['PaymentService','AuthenticationService','$scope',function(PaymentService,AuthenticationService,$scope){
    console.log("my trans ",AuthenticationService.getCurrentUser());
    $scope.orderDetails=PaymentService.getUserOrder(AuthenticationService.getCurrentUser());
    
}]);