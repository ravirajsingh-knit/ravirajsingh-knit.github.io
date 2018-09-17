angular.module("product").component("productDisplay",{
    templateUrl:"product/productDisplay.template.html",
    controller:['CartService','$scope','$rootScope',function(CartService,$scope,$rootScope){
            this.products=CartService.getAllProducts();
            
            
        }]
});
