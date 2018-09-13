angular.module("payment").component("paymentDisplay",{
    templateUrl:"payment/payment.template.html",
    controller:['AuthenticationService','DataFactory','PaymentService','$scope','$rootScope','$location',function(AuthenticationService,DataFactory,PaymentService,$scope,$rootScope,$location){
        $scope.guestUser={};
        $scope.currentUser=AuthenticationService.getCurrentUser();
        $scope.getUserCart=DataFactory.getCart();
        $scope.totalAmount=0;
        $scope.userDetail={}
        $scope.mode=1;
        if($scope.currentUser=="Guest")
            $scope.mode=0;

        var getTotalAmount=function(){
            $scope.totalAmount=0;
            for(var i=0;i<$scope.getUserCart.length;i++)
                $scope.totalAmount+=$scope.getUserCart[i].quantity*$scope.getUserCart[i].cost;
        }
        console.log($scope.currentUser,$scope.getUserCart);
        getTotalAmount();
        console.log("payment module");
        $scope.changeMode=function(id){
            if(id==-1 && $scope.currentUser=="Guest"){
                $scope.mode=0;
                return ;
            }
            else if(id==-1){
                $scope.mode=1;
                return ;
            }
                
            $scope.mode=id;
        }
        $rootScope.$on("ChangeinCart",function(){
            $scope.cart=DataFactory.getCart();
            getTotalAmount();
            console.log("from cart component",$scope.cart);
        });
        $scope.onSubmit=function(userDetail){
            $scope.userDetail=userDetail;
            $scope.mode=2;
        }
        $scope.placeOrder=function(){
            if($scope.currentUser!="Guest"){
                PaymentService.saveOrder(AuthenticationService.getCurrentUserDetails(),$scope.getUserCart);
                AuthenticationService.cleanCart();
            }
            else{
                $scope.userDetail.username="Guest";
                PaymentService.saveOrder($scope.userDetail,$scope.getUserCart);
                
            }
            DataFactory.cleanCart();
            $location.path('/myorder');
            window.alert("ORDERED PLACED");
        }
       
    }]
});