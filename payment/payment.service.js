angular.module('payment').service('PaymentService',['$rootScope', '$filter', '$q',function($rootScope, $filter, $q){
    var orders=[];
    this.saveOrder=function(user,cart){
        var order={};
        order.transactionId=Math.floor((Math.random() * 100000) + 1);
        order.userDetail=user;
        order.cartDetail=cart;
        orders.push(order);
        console.log(orders);
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

}]);
