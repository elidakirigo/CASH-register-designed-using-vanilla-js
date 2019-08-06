var CashRegister = {
    total: 0,
    lastTransctionAmount: 0,

    add: function (itemCost) {
        this.total += itemCost;
        this.lastTransctionAmount = itemCost;
    },
    scan: function (item, qty) {
        var itemCost = 0;
    switch (item) {
        case "eggs":this.add(0.98 * qty);break;
        case "milk":this.add(1.23 * qty);break;
        case "magazine":this.add(4.99 * qty);break;
        case "chocolate":this.add(4.99 * qty);break;
       // default: return false;
        }
        this.add(itemCost * qty);
        return true;
       // return this;
    },

    voidLastTransaction: function () {
        this.total -= this.lastTransctionAmount;
    }
};

// CashRegister.total = 2.99;
/*var eggCost = 0.98;
var milkCost = 1.23;
var magazineCost = 0.45;
var chocolateCost = 0.45;
*/


/*
CashRegister.add(eggCost);
CashRegister.add(milkCost);
CashRegister.add(magazineCost);
CashRegister.add(chocolateCost);
*/

CashRegister.scan("eggs", 1);
CashRegister.scan("magazine", 1);
CashRegister.scan("chocolate", 4);
CashRegister.scan("milk", 1);

CashRegister.voidLastTransaction();
CashRegister.scan("chocolate", 3);
console.log("your bill is " + CashRegister.total + "ksh");