angular.module("payment").controller("myOrder",['PaymentService','AuthenticationService','$scope',function(PaymentService,AuthenticationService,$scope){
    $scope.orderDetails=PaymentService.getUserOrder(AuthenticationService.getCurrentUser());
    
}]);