angular.module("payment")
.directive("myOrder",function(){
    return {
    restrict: "E",
    scope: {
        details: '=',
    },
    templateUrl: "payment/directives/myOrder.template.html",
    controller: "myOrder"
    };
});