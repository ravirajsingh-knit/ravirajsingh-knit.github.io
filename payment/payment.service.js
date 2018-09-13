angular.module('payment').service('PaymentService',['$rootScope', '$filter', '$q','$cookies',function($rootScope, $filter, $q,$cookies){
    var orders=[];
    var updateCookies=function(){
        $cookies.putObject("orderDetail",orders);
    }


    var setOrder=function(){
       // console.log("set cookies",$cookies.getObject("cartDetail"));
        if($cookies.getObject("orderDetail")!=undefined){
            orders=$cookies.getObject("orderDetail");
            
           // $rootScope.$emit("ChangeinCart");
        }    
    }
    setOrder();

    this.saveOrder=function(user,cart){
        var order={};
        order.transactionId=Math.floor((Math.random() * 100000) + 1);
        order.userDetail=user;
        order.cartDetail=cart;
        orders.push(order);
        console.log(orders);
        updateCookies();
        return order.transactionId;
    }
    this.getUserOrder=function(username){
        var outputs=[];
        for(var i=0;i<orders.length;i++){
            var output={};
            if(username==orders[i].userDetail.username){
                output.transactionId=orders[i].transactionId;
                output.cartDetail=orders[i].cartDetail;
                outputs.push(output);
            }
        }
            
            return outputs;
    }
    this.getOrder=function(transactionId){
        var output={};
        console.log(orders);
        console.log(transactionId)
        for(var i=0;i<orders.length;i++){
            if(transactionId==orders[i].transactionId){
                output.transactionId=orders[i].transactionId;
                output.cartDetail=orders[i].cartDetail;
               return output;
            }
        }
        return null;
    }

}]);
