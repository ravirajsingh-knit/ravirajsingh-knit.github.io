angular.module("user")
.controller("userDetail",['UserService','AuthenticationService','$scope','$location',function(UserService,AuthenticationService,$scope,$location){
    $scope.userDetail=angular.copy(AuthenticationService.getCurrentUserDetails());
    $scope.editMode=false;
    if($scope.userDetail==null)
        $location.path('/');
    
    $scope.changeMode=function(){
        $scope.editMode=true;
    } 
    $scope.clickedCancel=function(){
        $scope.userDetail=angular.copy(AuthenticationService.getCurrentUserDetails());
        $scope.editMode=false;
    }
    $scope.clickedSubmit=function(info){
        if(UserService.updateUserDetail(info)){
            $scope.userDetail=angular.copy(AuthenticationService.getCurrentUserDetails());
            $scope.editMode=false;
        }
        else
            console.log("WRON");
        
    }     

}
]);