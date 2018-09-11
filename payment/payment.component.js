angular.module("payment").component("paymentDisplay",{
    templateUrl:"payment/payment.template.html",
    controller:['AuthenticationService','DataFactory','PaymentService','$scope','$rootScope','$location',function(AuthenticationService,DataFactory,PaymentService,$scope,$rootScope,$location){
        $scope.currentUser=AuthenticationService.getCurrentUser();
        $scope.getUserCart=DataFactory.getCart();
        $scope.totalAmount=0;
        $scope.mode=1;
        var getTotalAmount=function(){
            $scope.totalAmount=0;
            for(var i=0;i<$scope.getUserCart.length;i++)
                $scope.totalAmount+=$scope.getUserCart[i].quantity*$scope.getUserCart[i].cost;
        }
        getTotalAmount();
        
        $scope.changeMode=function(id){
            console.log(id);
            $scope.mode=id;
        }
        $rootScope.$on("ChangeinCart",function(){
            $scope.cart=DataFactory.getCart();
            getTotalAmount();
            console.log("from cart component",$scope.cart);
           // $scope.$apply();
        });
        $scope.placeOrder=function(){
            PaymentService.saveOrder(AuthenticationService.getCurrentUserDetails(),$scope.getUserCart);
            $location.path('/myorder');

        }

        
    }]
});