
angular.module('user').service('UserService',['$rootScope', '$filter', '$q','$cookies',function($rootScope, $filter, $q,$cookies){
    var users=[];
    var updateCookies=function(){
        console.log("not working cookies");
        if($cookies.getObject("userDetail")!=undefined){
            users=$cookies.getObject("userDetail");
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
                return users[i].cart;
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
    this.Create=function(user,cart) {
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
        user.cart=cart;
        console.log(user.cart);
        users.push(user);
        saveUsers();
        return true;
        
    }
    this.cleanCart=function(user){
        for(var i=0;i<users.length;i++)
            if(users[i].username==user)
                users[i].cart=[];
                saveUsers();

    }
    this.updateCart=function(cart){
        if($rootScope.globals==undefined||$rootScope.globals.currentUser==undefined||$rootScope.globals.currentUser.username==undefined)
            return;
        for(var i=0;i<users.length;i++)
            if($rootScope.globals.currentUser.username==users[i].username)
            users[i].cart=cart;
            saveUsers();    
    } 
}]);        