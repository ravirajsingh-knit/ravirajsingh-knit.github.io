angular.module("app").run(run)
run.$inject = ['$rootScope', '$location', '$cookies', '$http','CartService'];
    function run($rootScope, $location, $cookies, $http,CartService) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }
        CartService.setCart();

     
}

