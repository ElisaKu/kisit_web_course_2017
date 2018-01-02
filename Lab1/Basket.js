var prodcuts = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, {
	name : "test2",
	price : 30,
	inventory : 80
}];

class ProductLineItem {
	constructor(product) {
		this.name=product.name;
		this.price=product.price;
		this.inventory=1;
	}
}


var basket = (function(){
	var productArray=[];
	return {
		addProduct : function(productID){
			if(!(productID in products)||products[productID].inventory == 0)
				return false;
			var itemIndex = this.getIdOf(products[productID].name);
			if (itemIndex==-1)
				productArray.push(new ProductLineItem(products[productID]))
			else productArray[itemIndex].inventory--;
			return true;
		},
		
		removeProduct : function(productID){
			if(!(productID in products)) 
				return false;
			var itemIndex = this.getidOf(products[productID].name);
			if (itemIndex==-1) 
				return false;
			if(productArray[itmIndex].inventory>0) productArray[itmIndex].inventory--;
			return true;
		},
										 
		updateProductQuantity : function(productID, quantity) {
			if(!(productID in products)) 
				return false;
			var itemIndex = this.getidOf(products[productID].name);
			if (itemIndex == -1) 
				return false;
			productArray[itmIndex].inventory = quantity;
			return true;
		},
			
		getTotalPrice : function(){
			var totalPrice=0;
			for(var i = 0; i < productArray.length; i++){
				totalPrice += productArray[i].price * productArray[i].inventory;
			}
			return totalPrice;
		},
		
		getIdOf: function(productName){
		for(var i = 0; i<productArray.length;i++){
			if (productArray[i].name==productName)
				return i;
		}
			return -1;
		}
	}
})();
