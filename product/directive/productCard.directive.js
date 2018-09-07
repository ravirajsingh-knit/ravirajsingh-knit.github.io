angular.module("product").directive("productCard",function(){
    return {
    restrict: "E",
    scope: {
        details: '=',
    },
    templateUrl: "product/directive/productCard.template.html",
    controller: "productCard"
    };
});