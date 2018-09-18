angular.module('checkout').service('CheckoutService',['$rootScope', '$filter', '$q','$cookies',function($rootScope, $filter, $q,$cookies){
    var orders=[];
    var updateCookies=function(){
        $cookies.putObject("orderDetail",orders);
    }


    var setOrder=function(){
        if($cookies.getObject("orderDetail")!=undefined){
            orders=$cookies.getObject("orderDetail");
        }    
    }
    setOrder();



    this.saveOrder=function(cart){
        var order={};
        order.transactionId=Math.floor((Math.random() * 100000) + 1);
        order.cartDetail=cart;
        orders.push(order);
        console.log(orders);
        updateCookies();
        return order.transactionId;
    }

    this.getOrderFromId=function(transactionId){
        for(var i=0;i<orders.length;i++){
            if(transactionId==orders[i].transactionId)
                return orders[i];
        }
        return null;
    }
    this.getOrder=function(transactionIds){
        var outputs=[];
        console.log(orders);
        console.log(transactionIds)
        for(var i=0;i<transactionIds.length;i++){
            var output={};
            for(var j=0;j<orders.length;j++){
                console.log(transactionIds[i],orders[j].transactionId)
                if(transactionIds[i]==orders[j].transactionId){
                    output.transactionId=orders[j].transactionId;
                    output.cartDetail=orders[j].cartDetail;
                    console.log("output=",output);
                    outputs.push(output);
                    break;
                }
            }
        }


        
        return outputs;
    }

}]);
