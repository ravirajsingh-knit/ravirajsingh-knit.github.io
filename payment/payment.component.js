angular.module("payment").component("paymentDisplay",{
    templateUrl:"payment/payment.template.html",
    controller:['AuthenticationService','DataFactory','PaymentService','$scope','$rootScope','$location',function(AuthenticationService,DataFactory,PaymentService,$scope,$rootScope,$location){
       
        $scope.currentUser=AuthenticationService.getCurrentUser();
        $scope.getUserCart=DataFactory.getCart();
        $scope.totalAmount=0;
        $scope.mode=1;
        if($scope.currentUser=="Guest")
            $scope.mode=4;

        var getTotalAmount=function(){
            $scope.totalAmount=0;
            for(var i=0;i<$scope.getUserCart.length;i++)
                $scope.totalAmount+=$scope.getUserCart[i].quantity*$scope.getUserCart[i].cost;
        }
        getTotalAmount();
        console.log("payment module");
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
            if($scope.currentUser!="Guest"){
                PaymentService.saveOrder(AuthenticationService.getCurrentUserDetails(),$scope.getUserCart);
                AuthenticationService.cleanCart();
            }
            else{
                userDetail.userName="GUEST"
                PaymentService.saveOrder(userDetail,$scope.getUserCart);
                
            }
            DataFactory.cleanCart();
            $location.path('/myorder');
        }
      console.log("payment model chala gaya ");  
    }]
});