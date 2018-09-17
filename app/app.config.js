angular.module("app").config(function($locationProvider,$routeProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
                .when("/home",{
                    template:"<product-display></product-display>",
                })
                .when("/",{
                    template:"<product-display></product-display>",
                })
                .when("/checkoutcart",{
                    template:"<cart-display></cart-display>",
                })
                .when("/user",{
                    template:"<user-display></user-display>",
                })
                .when("/userdetails",{
                    template:"<user-detail></user-detail>",
                })
                .when("/checkout",{
                    template:"<checkout-display></checkout-display>",
                })
                .when("/myorder",{
                    template:"<my-order></my-order>",
                })
                .otherwise('/');
            
    
});
