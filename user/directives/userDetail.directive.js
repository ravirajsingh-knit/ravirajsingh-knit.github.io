angular.module("user").directive("userDetail",function(){
    return {
    restrict: "E",
    scope: {
        details: '=',
    },
    templateUrl: "user/directives/userDetail.template.html",
    controller: "userDetail"
    };
});