angular.module("cart")
.directive("smallCart",function(){
    return {
    restrict: "E",
    scope: {
        details: '=',
    },
    templateUrl: "cart/directives/smallCart/smallCart.template.html",
    controller: "smallCart"
    };
});