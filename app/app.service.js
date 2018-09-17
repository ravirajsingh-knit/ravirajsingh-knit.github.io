angular.module("app").service('DataFactory',['$rootScope','$cookies','UserService','ProductService',function($rootScope,$cookies,UserService,ProductService){

    

    var cart=[];
    
    var updateCookies=function(){
        $cookies.putObject("cartDetail",cart);
    }
    
    this.setCart=function(){
        console.log("set cookies",$cookies.getObject("cartDetail"));
        if($cookies.getObject("cartDetail")!=undefined){
            cart=$cookies.getObject("cartDetail");
            
           // $rootScope.$emit("ChangeinCart");
        }   
    }
    
    console.log(cart);
    this.getAllProducts=function(){
        return ProductService.getAllProduct();
    }

    this.addToCart=function(id,quantity){
        var b=true;
        for(var i=0;i<cart.length;i++){
            if(id==cart[i].id){
                b=false;
                if(cart[i].quantity+quantity>3)
                    window.alert("We offer only max 3 quantity of a product");
                cart[i].quantity=Math.min(cart[i].quantity+quantity,3);  
            }    
        }
        if(b){
            var item={}
            item.id=id;
            item.quantity=quantity;
            cart.push(item);
        }
        //console.log(cart);
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }
    this.getRefCart=function(){
        return cart;
    }

    this.getCart=function(){
        console.log("get cart",cart);
        var cartItems=[];
        for(var i=0;i<cart.length;i++){
            var item={};
            item=ProductService.getProduct(cart[i].id);
            item.quantity=cart[i].quantity.toString();
            cartItems.push(item);
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
        updateCookies();
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
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }

    this.cleanCart=function(){
        cart=[];
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }

    this.updateCart=function(id,quantity){
        for(var i=0;i<cart.length;i++){
            if(cart[i].id==id){
                cart[i].quantity=Math.min(3,quantity);
                break;
            }
        }
        console.log("service update command");
        UserService.updateCart(cart);
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }
}]);