angular.module("product").component("productDisplay",{
    templateUrl:"product/productDisplay.template.html",
    controller:['ProductService','$scope','$rootScope',function(ProductService,$scope,$rootScope){
            this.products=ProductService.getAllProduct();
            
            
        }]
});
