angular.module("app").run(run)
run.$inject = ['$rootScope', '$location', '$cookies', '$http','DataFactory'];
    function run($rootScope, $location, $cookies, $http,DataFactory) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }
        DataFactory.setCart();

        // $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //     // redirect to login page if not logged in and trying to access a restricted page
        //     var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        //     var loggedIn = $rootScope.globals.currentUser;
        //     if (restrictedPage && !loggedIn) {
        //         $location.path('/user');
        //     }
        // });
}

