angular.module("product").component("productDisplay",{
    templateUrl:"product/productDisplay.template.html",
    controller:['DataFactory','$scope','$rootScope',function(DataFactory,$scope,$rootScope){
            this.products=DataFactory.getAllProducts();
            
            
        }]
});
