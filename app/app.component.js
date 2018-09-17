angular.module("app").component('headerComponent',{
    templateUrl:"app/app.template.html",

    controller:[ 'CartService','$location','$scope','$rootScope','AuthenticationService',
    function(CartService,$location,$scope,$rootScope,AuthenticationService){
        $scope.userName=AuthenticationService.getCurrentUser();
        // $rootScope.$on("updateCart",function(){
        //     console.log("Received boroad")
        //     $rootScope.$broadcast("updateCart");
        // });
        
        var changeMode=function(){
            if(AuthenticationService.getCurrentUser()=="Guest")
                $scope.showMode=false;
            else
                $scope.showMode=true;

        }
        changeMode();
        $scope.Logout=function(){
            AuthenticationService.ClearCredentials();
            CartService.cleanCart();
            $location.path('/');
        }
        $scope.userDetails=function(){
            if(AuthenticationService.getCurrentUser()=="Guest")
                return;
            else
                $location.path('/userdetails');
        }
        
        $scope.Login=function(){
            $location.path('/user');
        }
    
        $rootScope.$on("updateUser",function(){
            $scope.userName=AuthenticationService.getCurrentUser();
            changeMode();
        });
        
    }
    ]  
});


