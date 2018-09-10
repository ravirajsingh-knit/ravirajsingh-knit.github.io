angular.module("app").config(function($locationProvider,$routeProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
                .when("/home",{
                    template:"<product-display></product-display>",
                })
                .when("/",{
                    template:"<product-display></product-display>",
                })
                .when("/checkout",{
                    template:"<cart-display></cart-display>",
                })
                .when("/user",{
                    template:"<user-display></user-display>",
                })
                .when("/userdetails",{
                    template:"<user-detail></user-detail>",
                })
                .otherwise('/');
            
    
});
