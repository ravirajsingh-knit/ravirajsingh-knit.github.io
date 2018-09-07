angular.module("user").component("userDisplay",{
    templateUrl:"user/user.template.html",
    controller:['DataFactory','$window','$scope','$rootScope',function(DataFactory,$scope,$rootScope,$window){
            
        this.login=function(){
            DataFactory.makeDumyUser(this.user,this.password);
           // $window.location.href = '/payment';
        }
            
        }
    ]
    
});