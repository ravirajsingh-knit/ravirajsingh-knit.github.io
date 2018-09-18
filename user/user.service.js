
angular.module('user').service('UserService',['$rootScope', '$filter', '$q','$cookies','CartService',function($rootScope, $filter, $q,$cookies,CartService){
    var users=[];
    var updateCookies=function(){
        console.log("not working cookies");
        if($cookies.getObject("userDetail")!=undefined){
            users=$cookies.getObject("userDetail");
            console.log("users=",users);
            for(var i=0;i<users.length;i++)
                users[i].cardDetails.expDate=new Date( users[i].cardDetails.expDate);
        }
           
        console.log("update users cookies",users);    
    }
    var saveUsers=function(){
        $cookies.putObject("userDetail",users);
    }
    this.verifyUser=function(username,password){
        for(var i=0;i<users.length;i++)
            if(users[i].username==username && users[i].password==password)
                return true;
        return false;
    }
    updateCookies();

    this.getUserDetail=function(username){
        for(var i=0;i<users.length;i++)
            if(users[i].username==username)
                return users[i];
    } 

    this.getUserCart=function(username){
        for(var i=0;i<users.length;i++)
            if(users[i].username=username)
                return users[i].cartId;
    }

    this.pushTransactionId=function(username,transactionId){
        for(var i=0;i<users.length;i++){
            if(users[i].username==username){
                users[i].transactionIds.push(transactionId);
                console.log("push tan",users);
                saveUsers();
                return ;
            }
                
        }
    }
    this.getCurrentUserTransactionIds=function(username){
        console.log(users);

        for(var i=0;i<users.length;i++){
            if(users[i].username==username){
                console.log(username,users[i].transactionIds);
                return users[i].transactionIds;
            }
                
        }
    }

    this.getCurrentUserCartId=function(username){
        for(var i=0;i<users.length;i++){
            if(users[i].username==username){
                return users[i].cartId
            }
        }
        if(username=="Guest")
            return 7777;
    }

    this.updateUserDetail=function(info){
        for(var i=0;i<users.length;i++)
            if(users[i].username==info.username){
                users[i].firstName=info.firstName;
                users[i].lastName=info.lastName;
                users[i].cardDetails.cardNumber=info.cardDetails.cardNumber;
                users[i].cardDetails.expDate=info.cardDetails.expDate;
                users[i].mobile=info.mobile;
                users[i].address=info.address;
                console.log("Information ",info);
                console.log("users ",users[i]);
                saveUsers();
                return true;
            }
            return false;
    }
    this.checkProfile=function(username){
        console.log("function called1");
        for(var i=0;i<users.length;i++){
            console.log("function called2");
            if(users[i].username==username){
                console.log("function called");
                console.log(users[i].mobile,users[i].address,users[i].cardDetails.cardNumber,users[i].cardDetails.expDate);
                if(users[i].mobile==""||users[i].address==""||users[i].cardDetails.cardNumber==""||users[i].cardDetails.expDate=="")
                    return false;
            }

        }

        return true;
    }
    this.Create=function(user) {
        console.log(user);
        for(var i=0;i<users.length;i++)
            if(users[i].username==user.username)
                    return false;
        //user.cart=[];
        user.cardDetails={};
        user.cardDetails.cardNumber="";
        user.cardDetails.expDate=new Date(00, 0, 00);;
        user.mobile="";
        user.address="";
        user.cartId=CartService.createUserCart();
        
        user.transactionIds=[];
        console.log(user.cart);
        users.push(user);
        saveUsers();
        return true;
        
    }
   
}]);        