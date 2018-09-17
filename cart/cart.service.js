angular.module("cart").service('CartService',['$rootScope','$cookies','ProductService',function($rootScope,$cookies,ProductService){

    

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
        else{
            var item={}
            item.cartId=7777;
            item.cartItems=[];
            cart.push(item);
        }   
    }
    
    console.log(cart);
    

    this.createUserCart=function(){
        var item={};
        item.cartId=Math.floor((Math.random() * 100000) + 1);
        item.cartItems=[];
        cart.push(item);
        return item.cartId;
    }


    this.cartIsEmpty=function(cartId){
        for(var i=0;i<cart.length;i++){
            if(cart[i].cartId==cartId)
                if(cart[i].cartItems.length==0)
                    return false;
                else
                    return true;
        }
    }

    this.addToCart=function(cartId,id,quantity){
        console.log(cartId);
        for(var i=0;i<cart.length;i++){
            
            if(cartId==cart[i].cartId){
                var flag=true;
                for(var j=0;j<cart[i].cartItems.length;j++){
                    if(id==cart[i].cartItems[j].id){
                        flag=false;
                        cart[i].cartItems[j].quantity=Math.min(quantity+cart[i].cartItems[j].quantity,3);
                        break;
                    }
                }
                if(flag){
                    var item={};
                    item.id=id;
                    item.quantity=Math.min(quantity,3);
                    cart[i].cartItems.push(item)
                }
                break;
            }
        }
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }

    this.getRefCart=function(cartId){
        for(var i=0;i<cart.length;i++)
            if(cart[i].cartId==cartId)
                return cart[i].cartItems;

    }

    this.getCart=function(cartId){
        console.log("cartId=",cartId);
        console.log("get cart",cart);
        var usercart=[];
        for(var i=0;i<cart.length;i++){
            if(cartId==cart[i].cartId){
                console.log("cart ",cartId,cart[i].cartId,cart[i].cartItems);
                for(var j=0;j<cart[i].cartItems.length;j++){
                    var item={};
                    item=ProductService.getProduct(cart[i].cartItems[j].id);
                    item.quantity=cart[i].cartItems[j].quantity.toString();
                    usercart.push(item);
                }
            }
        }
        console.log(usercart);
        return usercart;
    }



    this.removeFromCart=function(cartId,id){
        for(var i=0;i<cart.length;i++){
            if(cartId==cart[i].id){
                for(var j=0;j<cart[i].cartItems.length;j++){
                    if(cart[i].cartItems[j].id==id){
                        cart[i].cartItems.splice(j,1);
                        $rootScope.$emit("ChangeinCart");
                        break;
                    }
                }
                break;
            }
        }
        console.log("service remove command");
        updateCookies();
        $rootScope.$emit("ChangeinCart");

    }

    

    this.mergeCart=function(cartId,userCart){
        console.log("from merge=",cartId,userCart);
        for(var i=0;i<cart.length;i++){
            if(cartId==cart[i].cartId){
                for(var j=0;j<userCart.length;j++){
                    var flag=true;
                    for(var k=0;k<cart[i].cartItems.length;k++){
                        if(cart[i].cartItems[k].id==userCart[j].id){
                            cart[i].cartItems[k].quantity=Math.min(userCart[j].quantity+cart[i].cartItems[k].quantity,3);
                            flag=false;
                            break;
                        }
                    }
                    if(flag)
                        cart[i].cartItems.push(userCart[j]);
                    console.log("from merge=",cart[i].cartItems);    
                }
            }
        }


      
   //     UserService.updateCart(cart);
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }


    this.cleanCart=function(cartId){
        
        for(var i=0;i<cart.length;i++){
            if(cartId==cart[i].cartId)
                cart[i].cartItems=[];
        }
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }


    this.updateCart=function(cartId,id,quantity){
        
        for(var i=0;i<cart;i++){
            if(cart[i].cartId==cartId){
                for(var j=0;j<cart[i].cartItems.length;j++){
                    if(cart[i].cartItems[j].id==id){
                        cart[i].cartItems[j].quantity=Math.min(3,quantity);
                        break;
                    }
                }
                break;
            }
        }
        
        console.log("service update command");
        updateCookies();
        $rootScope.$emit("ChangeinCart");
    }









   
}]);