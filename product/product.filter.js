angular.module("product").filter("productCat",function() {
    return function(product, selector) {
        if(!selector)
            return product;
        if(!selector[0]&&!selector[1]&&!selector[2])
            return product;
        

        return product.filter(function(element, index, array) {
            return (element.category=="Wear"&& selector[2])||(element.category=="Books"&& selector[1])||(element.category=="Electronic"&& selector[0]);
            });    
    };
  });