angular.module("checkout")
.directive("myOrder",function(){
    return {
    restrict: "E",
    scope: {
        details: '=',
    },
    templateUrl: "checkout/directives/myOrder.template.html",
    controller: "myOrder"
    };
});