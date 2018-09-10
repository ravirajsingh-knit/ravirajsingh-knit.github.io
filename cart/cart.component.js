angular.module("cart").component("cartDisplay",{
    templateUrl:"cart/cart.template.html",
    controller:['DataFactory','AuthenticationService','$location','$rootScope','$scope',function(DataFactory,AuthenticationService,$location,$rootScope,$scope){
        $scope.cart=DataFactory.getCart();
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
            else
                $location.path('/');
        }
        
        console.log("from cart component",$scope.cart);
            $rootScope.$on("ChangeinCart",function(){
                $scope.cart=DataFactory.getCart();
                getTotalAmount();
                console.log("from cart component",$scope.cart);
               // $scope.$apply();
            });  
        }]
});