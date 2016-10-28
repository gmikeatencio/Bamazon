// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// Then create a Node application called BamazonCustomer.js. 
//first display all of the items available for sale. 
//Include the ids, names, and prices of products for sale.
var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root", //Your username
   password: "", //Your password
   database: "Bamazon_db"
})
connection.connect(function(err){})
connection.query('SELECT * FROM products', function(err, res) {
   if (err) throw err;
   console.log(JSON.stringify(res, null, 2));
})
// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
inquirer.prompt([
    {
        type: "input",
        message: "What would you like to buy?",
        name: "product"
    },
    {
        type: "input",
        message: "How much?",
        name: "quantity"
    }
]).then(function (order) {
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
var selected = order.product
console.log(order.product)
connection.query("SELECT * FROM products WHERE ?", [{
   item_id: selected
}], function(err, res) {
	 if (err) throw err;
   var order = JSON.stringify(res, null, 2);
   console.log(order);
});



// if (){
// }
// else () {
// }

});

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.


