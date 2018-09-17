angular.module("product").service('ProductService',['$rootScope','$cookies',function($rootScope,$cookies){

    var allProducts=[{
        "id":"7804493863",
        "name":"Samsung S 8",
        "category":"Electronic",
        "image":"Mobile.svg",
        "rating":"1",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"219755"
        },
        {
        "id":"72435578306",
        "name":"IPhone 9",
        "category":"Electronic",
        "image":"Mobile.svg",
        "rating":"4",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"699380"
        },
        {
        "id":"72946994273",
        "name":"Samsung S 6",
        "category":"Electronic",
        "image":"Mobile.svg",
        "rating":"4",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"879724"
        },
        {
        "id":"18408764775",
        "name":"IPhone 10",
        "category":"Electronic",
        "image":"Mobile.svg",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"27505"
        },
        {
        "id":"5059032361",
        "name":"Mi 5",
        "category":"Electronic",
        "image":"Mobile.svg",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"29801"
        },
        {
        "id":"1267096578",
        "name":"DELL 8",
        "category":"Electronic",
        "image":"Laptop.svg",
        "rating":"2",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"5169395"
        },
        {
        "id":"99904374667",
        "name":"HP 6",
        "category":"Electronic",
        "image":"Laptop.svg",
        "rating":"4",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"3884460"
        },
        {
        "id":"90728886229",
        "name":"HP 6",
        "category":"Electronic",
        "image":"Laptop.svg",
        "rating":"2",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"1967034"
        },
        {
        "id":"36230308274",
        "name":"HP 10",
        "category":"Electronic",
        "image":"Laptop.svg",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"2986981"
        },
        {
        "id":"85574130207",
        "name":"SONY 10",
        "category":"Electronic",
        "image":"Laptop.svg",
        "rating":"0",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"6142841"
        },
        {
        "id":"15160738583",
        "name":"English 8",
        "category":"Books",
        "image":"Book.svg",
        "rating":"0",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"498"
        },
        {
        "id":"43144064946",
        "name":"Hindi6",
        "category":"Books",
        "image":"Book.svg",
        "rating":"3",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"257"
        },
        {
        "id":"19327682807",
        "name":"Science 5",
        "category":"Books",
        "image":"Book.svg",
        "rating":"0",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"347"
        },
        {
        "id":"86559560618",
        "name":"English 4",
        "category":"Books",
        "image":"Book.svg",
        "rating":"0",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"188"
        },
        {
        "id":"22919825559",
        "name":"Physic 7",
        "category":"Books",
        "image":"Book.svg",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"288"
        },
        {
        "id":"51000006854",
        "name":"MATH  8",
        "category":"Books",
        "image":"Book.svg",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"205"
        },
        {
        "id":"20522384010",
        "name":"Physic 3",
        "category":"Books",
        "image":"Book.svg",
        "rating":"3",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"288"
        },
        {
        "id":"7931476827",
        "name":"Hindi9",
        "category":"Books",
        "image":"Book.svg",
        "rating":"1",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"180"
        },
        {
        "id":"38380696930",
        "name":"Science 7",
        "category":"Books",
        "image":"Book.svg",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"496"
        },
        {
        "id":"97537286456",
        "name":"English 6",
        "category":"Books",
        "image":"Book.svg",
        "rating":"0",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "cost":"196"
        },
        {
        "id":"55767405835",
        "name":"Shirt S",
        "category":"Wear",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"7662"
        },
        {
        "id":"12530923131",
        "name":"Shirt M",
        "category":"Wear",
        "rating":"2",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"1823"
        },
        {
        "id":"31536230453",
        "name":"Tshirt S",
        "category":"Wear",
        "rating":"3",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"2239"
        },
        {
        "id":"99476838909",
        "name":"Tshirt S",
        "category":"Wear",
        "rating":"2",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"1761"
        },
        {
        "id":"73805421707",
        "name":"Tshirt XL",
        "category":"Wear",
        "rating":"4",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"4147"
        },
        {
        "id":"25143698262",
        "name":"Shirt L",
        "category":"Wear",
        "rating":"0",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"7686"
        },
        {
        "id":"85136856095",
        "name":"Shirt M",
        "category":"Wear",
        "rating":"5",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"7208"
        },
        {
        "id":"98489884114",
        "name":"Shoes M",
        "category":"Wear",
        "rating":"4",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"503"
        },
        {
        "id":"73915649052",
        "name":"Shirt L",
        "category":"Wear",
        "rating":"3",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"2224"
        },
        {
        "id":"4491153803",
        "name":"Shirt L",
        "category":"Wear",
        "rating":"1",
        "property":" 8 GB RAM, 64 Internal Storage,8 MP Camera, 13 MP Front Camera, 5 Screen, Black Color, 4G/5G Support, Dual Sim, Hybrid Memory Slot, 1024 * 768 Screen resolution, Full HD ",
        "image":"Wear.svg",
        "cost":"6443"
        },
        ];

        this.getProduct=function(id){
            for(var i=0;i<allProducts.length;i++)
                if(id==allProducts[i].id)
                return allProducts[i];
            return false;
        }
        this.getAllProduct=function(){
            return allProducts;
        }


    
}]);
