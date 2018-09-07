angular.module("cart")
.directive("cartView",function(){
    return {
    restrict: "E",
    scope: {
        details: '=',
    },
    templateUrl: "cart/directives/cartView/cartView.template.html",
    controller: "cartView"
    };
});