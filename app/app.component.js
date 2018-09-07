angular.module("app").component('headerComponent',{
    templateUrl:"app/app.template.html",

    controller:[ 'DataFactory', '$scope','$rootScope',
    function(DataFactory,$rootScope){
        $rootScope.$on("updateCart",function(){
            console.log("Received boroad")
            $rootScope.$broadcast("updateCart");
        });

        
    }
    ]  
});


