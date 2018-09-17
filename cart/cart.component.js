angular.module("cart").component("cartDisplay",{
    templateUrl:"cart/cart.template.html",
    controller:['CartService','AuthenticationService','UserService','$location','$rootScope','$scope',function(CartService,AuthenticationService,UserService,$location,$rootScope,$scope){
        $scope.cart=angular.copy(CartService.getCart(AuthenticationService.getCurrentUserCartId()));
        $scope.totalAmount=0;
        var getTotalAmount=function(){
            $scope.totalAmount=0;
            for(var i=0;i<$scope.cart.length;i++)
                $scope.totalAmount+=$scope.cart[i].quantity*$scope.cart[i].cost;
        }
        getTotalAmount();
        
        $scope.onCheckOut=function(){
            console.log(AuthenticationService.getCurrentUser());
            if(AuthenticationService.getCurrentUser()=="Guest")
                $location.path('/user');
            else if(UserService.checkProfile(AuthenticationService.getCurrentUser())){
                $location.path('/checkout');
            }
            else{
                $location.path('/userdetails');
                window.alert("Please Complete Your Profile");
            }
               
        }
        
        console.log("from cart component",$scope.cart);
            $rootScope.$on("ChangeinCart",function(){
                $scope.cart=CartService.getCart(AuthenticationService.getCurrentUserCartId());
                getTotalAmount();
                console.log("from cart component",$scope.cart);
               // $scope.$apply();
            });  
        }]
});