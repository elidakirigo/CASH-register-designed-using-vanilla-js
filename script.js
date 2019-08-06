function StaffMember(name, discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("bob", 10);

var me = new StaffMember("ely", 20);

function Item(name, price, qoh) {
    this.name = name;
    this.price = price;
    this.qty = qoh;
}
var CashRegister = {
    total: 0,
    lastTransactionAmount: 0,
    items: [],
    addItem: function (item) {
        this.items.push(item);
        return this;
    },
    findItem: function (name) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                return this.items[i];
            }

        }
        return false;
    },
    add: function (itemCost) {
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function (itemName, quality) {
        var item = this.findItem(itemName);
        if (item) {
            this.add(item.price * quality);
            item.qty -= quality;
        }
        return this;
        //   var itemCost = 0;
        /*  switch (item) {
              case "eggs":this.add(0.98 * qty);break;
              case "milk":this.add(1.23 * qty);break;
              case "magazine":this.add(4.99 * qty);break;
              case "chocolate":this.add(4.99 * qty);break;
             // default: return false;
              }
              */
        /*   if (eggs) {
                this.add(0.98 * qty);
            } if (milk) {
                this.add(1.23 * qty)
            } if (magazine) {
                this.add(1.23 * qty)
            } if (chocolate) {
                this.add(4.99 * qty)
            }else {
                return false;
            }*/
        this.add(itemCost * qty);
        return true;
        // return this;
    },
    voidLastTransaction: function () {
        this.total -= this.lastTransctionAmount;
    },

    applyStaffDiscount: function (employee) {
        this.total *= (1.0 - (employee.discountPercent / 100));
    }
};
CashRegister.addItem(new Item("eggs", 5, 5))
    .addItem(new Item("milk", 2.50, 1))
    .addItem(new Item("magazine", 7.20, 5));

// console.log(CashRegister.items);


CashRegister.scan("eggs", 1);
CashRegister.scan("magazine", 3);
CashRegister.scan("milk", 1);

console.log(CashRegister.items);

CashRegister.applyStaffDiscount(me);

console.log("your bill is " + CashRegister.total + " ksh.");