angular.module("user").component("userDisplay",{
    templateUrl:"user/user.template.html",
    controller:['CartService','UserService','$scope','$timeout','AuthenticationService','$location',function(CartService,UserService,$scope,$timeout,AuthenticationService,$location){
    $scope.showMessage = "";
    $scope.mode=0;
    $scope.changeMode=function(id){
        if($scope.mode==id)
            $scope.mode=0;
        else
            $scope.mode=id;
        console.log($scope.mode);
    }    
    $scope.getMessage = function(message) {
              $scope.showMessage = message;
              $timeout(function() {
                 $scope.showMessage = "";
              }, 3000);
              
    };


    this.logout=function() {
        // reset login status
        AuthenticationService.ClearCredentials();
    }

    $scope.doGuest=function(){
        if(CartService.cartIsEmpty(AuthenticationService.getCurrentUserCartId())==0)
            $location.path("/");
        else    
            $location.path("/checkout");
    }
    this.login=function() {
        this.dataLoading = true;
        console.log(this.username, this.password);
        var userGuest=angular.copy(AuthenticationService.getCurrentUserCartId());
        var userCart=angular.copy(CartService.getRefCart(AuthenticationService.getCurrentUserCartId()));
        console.log("userCart=",userCart);
        if(AuthenticationService.Login(this.username, this.password)){
            
            AuthenticationService.SetCredentials(this.username,this.password);
        
            if(UserService.checkProfile(this.username))
                $location.path('/');
            else{
                $location.path('/userdetails');
                window.alert("Please Complete Profile");
            }
            this.username=undefined;
            this.password=undefined;
            $scope.form1.$setPristine();
            $scope.getMessage("Login Successfull")
            
            CartService.mergeCart(AuthenticationService.getCurrentUserCartId(),userCart);
            console.log("userGuest=",userGuest);
            CartService.cleanCart(userGuest);
            
        }
        else
            $scope.getMessage("Username or Password is wrong");
        this.dataLoading = false;    
    }




        this.register=function () {
            
            this.dataLoading = true;
            console.log(this.user);
            
            if(UserService.Create(this.user)){
                $scope.getMessage("User is Created");
                this.user=undefined;
                $scope.form.$setPristine();
                $scope.changeMode(1);
            }
            else{
                
                $scope.getMessage("Try other username");
            } 
            

            this.dataLoading = false;
        }
        
        }
    ]
    
});