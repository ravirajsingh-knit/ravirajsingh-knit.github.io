angular.module("user").component("userDisplay",{
    templateUrl:"user/user.template.html",
    controller:['DataFactory','UserService','$scope','$timeout','AuthenticationService','$location',function(DataFactory,UserService,$scope,$timeout,AuthenticationService,$location){
        $scope.showMessage = "";
        
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


    this.login=function() {
        this.dataLoading = true;
        console.log(this.username, this.password);
        if(AuthenticationService.Login(this.username, this.password)){
            AuthenticationService.SetCredentials(this.username,this.password);
            this.username=undefined;
            this.password=undefined;
            $scope.form1.$setPristine();
            $scope.getMessage("Login Successfull")
            $location.path('/');
        }
        else
            $scope.getMessage("Username or Password is wrong");
            this.dataLoading = false;    
    }




        this.register=function () {
            
            this.dataLoading = true;
            console.log(this.user);

            if(UserService.Create(this.user,DataFactory.getRefCart())){
                $scope.getMessage("User is Created");
                this.user=undefined;
                $scope.form.$setPristine();
               
            }
            else{
                
                console.log("Try other username");
            } 
            

            this.dataLoading = false;
        }
        
        }
    ]
    
});