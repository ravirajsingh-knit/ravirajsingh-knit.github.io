
angular.module('user').service('UserService',['$rootScope', '$filter', '$q',function($rootScope, $filter, $q){
    var users=[];

    this.verifyUser=function(username,password){
        for(var i=0;i<users.length;i++)
            if(users[i].username==username && users[i].password==password)
                return true;
        return false;
    }

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
                users[i].cardDetails.cardNumber=info.cardNumber;
                users[i].cardDetails.expDate=info.expDate;
                users[i].mobile=info.mobile;
                users[i].address=info.address;
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
        user.cardDetails.expDate="";
        user.mobile="";
        user.address="";
        user.cart=cart;
        console.log(user.cart);
        users.push(user);
        return true;
        
    }
    this.cleanCart=function(user){
        for(var i=0;i<users.length;i++)
            if(users[i].username==user)
                users[i].cart=[];


    }
    this.updateCart=function(cart){
        if($rootScope.globals==undefined||$rootScope.globals.currentUser==undefined||$rootScope.globals.currentUser.username==undefined)
            return;
        for(var i=0;i<users.length;i++)
            if($rootScope.globals.currentUser.username==users[i].username)
            users[i].cart=cart;
    }
    
}]);        





        
           
 
  