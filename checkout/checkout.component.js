angular.module("checkout").component("checkoutDisplay",{
    templateUrl:"checkout/checkout.template.html",
    controller:['AuthenticationService','CartService','CheckoutService','$scope','$rootScope','$location',function(AuthenticationService,CartService,CheckoutService,$scope,$rootScope,$location){
        $scope.guestUser={};
        $scope.currentUser=AuthenticationService.getCurrentUser();
        $scope.getUserCart=CartService.getCart(AuthenticationService.getCurrentUserCartId());
        $scope.totalAmount=0;
        $scope.userDetail={}
        $scope.mode=1;
        if($scope.currentUser=="Guest")
            $scope.mode=0;
        else
            $scope.userDetail =angular.copy(AuthenticationService.getCurrentUserDetails());


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
     
        
        $scope.onSubmit=function(userDetail){
            $scope.userDetail=userDetail;
            console.log($scope.userDetail);
            $scope.mode=2;
        }
        $scope.placeOrder=function(){
            var id=CheckoutService.saveOrder($scope.getUserCart);
            console.log("Transaction id from place order=",id);
            AuthenticationService.pushTransactionId(id);
            $rootScope.lastOrderId=id;
           // window.alert("Your Transaction ID is "+id+" .");
            CartService.cleanCart(AuthenticationService.getCurrentUserCartId());
            $location.path('/placedorder');
        }
        $rootScope.$on("ChangeinCart",function(){
            $scope.getUserCart=CartService.getCart(AuthenticationService.getCurrentUserCartId());
            if($scope.getUserCart.length==0){
                $location.path("/");
               // window.alert("Please Select Product first");
            }
                
            getTotalAmount();
            console.log("from cart component",$scope.getUserCart);
           // $scope.$apply();
        }); 
       
    }]
});