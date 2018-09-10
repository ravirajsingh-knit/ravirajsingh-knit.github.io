angular.module("app").service('DataFactory',['$rootScope','UserService',function($rootScope,UserService){

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

    var cart=[]    
    this.getAllProducts=function(){
        return allProducts;
    }

    this.addToCart=function(id,quantity){
        var b=true;
        for(var i=0;i<cart.length;i++){
            if(id==cart[i].id){
                b=false;
                cart[i].quantity=Math.min(cart[i].quantity+quantity,3).toString();  
            }    
        }
        if(b){
            var item={}
            item.id=id;
            item.quantity=quantity;
            cart.push(item);
        }
        //console.log(cart);
        $rootScope.$emit("ChangeinCart");
    }
    this.getRefCart=function(){
        return cart;
    }

    this.getCart=function(){
        var cartItems=[];
        for(var i=0;i<cart.length;i++){
            var item={};
            for(var j=0;j<allProducts.length;j++){
                if(cart[i].id==allProducts[j].id){
                    item.id=cart[i].id;
                    item.category=allProducts[j].category;
                    item.property=allProducts[j].property;
                    item.rating=allProducts[j].rating;
                    item.image=allProducts[j].image;
                    item.cost=allProducts[j].cost;
                    item.name=allProducts[j].name;
                    item.quantity=cart[i].quantity;
                    cartItems.push(item);
                }
            }
        }
        //console.log(cartItems);
        return cartItems;
    }

    this.removeFromCart=function(id){
        for(var i=0;i<cart.length;i++){
            if(cart[i].id=id){
                cart.splice(i,1);
                $rootScope.$emit("ChangeinCart");
                break;
            }
        }
        console.log("service remove command");
        UserService.updateCart(cart);
        $rootScope.$emit("ChangeinCart");

    }
    this.mergeCart=function(userCart){
        for(var i=0;i<userCart.length;i++){
            var flag=true;
            for(var j=0;j<cart.length;j++){
                if(userCart[i].id==cart[j].id){
                    cart[j].quantity=Math.min(userCart[i].quantity+cart[j].quantity,3);
                    flag=false;
                }
            }
            if(flag)
                cart.push(userCart[i]);
            
        }
        UserService.updateCart(cart);
        $rootScope.$emit("ChangeinCart");
    }
    this.cleanCart=function(){
        cart=[];
        $rootScope.$emit("ChangeinCart");
    }

    this.updateCart=function(id,quantity){
        for(var i=0;i<cart.length;i++){
            if(cart[i].id==id){
                cart[i].quantity=Math.min(3,quantity).toString();
                break;
            }
        }
        console.log("service update command");
        UserService.updateCart(cart);
        $rootScope.$emit("ChangeinCart");
    }
   

}]);