/*!
 * Exuma Mobile v@VERSION
 * http://exumatech.com/
 *
 * Copyright 2012, Exuma Technologies, Inc.
 * All rights reserved
 *
 * This function initializes the Customer database. It retrieves all customers from DockMaster
 * newer than the "lastmodifieddate" and inserts the data into four SQLite tables: Customers,
 * Boats, OpenInvoices and Categories.
 *
 * Notes: 1. DROP TABLE commands are for testing purposes only
 *        2. Forcing lastmodifieddate = ''. Will pass an actual date upon implementation
 *        3. For JSON struction see: http://74.115.253.204:3105/DB2Web.asmx/RetrieveAllCustomersJSON
 */

var dockmobile = {};
dockmobile.webdb = {};
dockmobile.webdb.db = null;

dockmobile.webdb.open = function() {
    var dbSize = 10 * 1024 * 1024; // 10MB
    dockmobile.webdb.db = openDatabase("customer", "", "Mobile Customer Database", dbSize);
}

dockmobile.webdb.createTable = function() {
    var db = dockmobile.webdb.db;
        db.transaction(function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS Customers');
                tx.executeSql('DROP TABLE IF EXISTS Boats');
                tx.executeSql('DROP TABLE IF EXISTS OpenInvoices');
                tx.executeSql('DROP TABLE IF EXISTS Categories');
                tx.executeSql('CREATE TABLE IF NOT EXISTS Customers(id INTEGER PRIMARY KEY, lastname TEXT, firstname TEXT, address1 TEXT, address2 TEXT, address3 TEXT, city TEXT, state TEXT, zip INTEGER, phone INTEGER, workphone INTEGER, cellphone INTEGER, email TEXT, balance INTEGER, inactivedate DATE, lastmodifieddate DATE)', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS Boats(boat_id INTEGER PRIMARY KEY, name TEXT, reg TEXT, slip TEXT, sliptype TEXT, cust_id INTEGER, FOREIGN KEY (cust_id) REFERENCES Customers (id))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OpenInvoices(invoice_id INTEGER PRIMARY KEY, amount INTEGER, due_date DATE, desc TEXT, cust_id INTEGER, FOREIGN KEY (cust_id) REFERENCES Customers (id))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS Categories(cat_code TEXT, desc TEXT, cust_id INTEGER, FOREIGN KEY (cust_id) REFERENCES Customers (id))', []);
    });
}

dockmobile.webdb.addCustomer = function(id, lastname, firstname, address1, address2, address3, city, state, zip, phone, workphone, cellphone, email, balance, inactivedate, lastmodifieddate) {
    var db = dockmobile.webdb.db;
    db.transaction(function(tx) {
        tx.executeSql("INSERT INTO Customers(id, lastname, firstname, address1, address2, address3, city, state, zip, phone, workphone, cellphone, email, balance, inactivedate, lastmodifieddate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [id, lastname, firstname, address1, address2, address3, city, state, zip, phone, workphone, cellphone, email, balance, inactivedate, lastmodifieddate],
            dockmobile.webdb.onSuccess,
            dockmobile.webdb.onError);
    });
}

dockmobile.webdb.addBoat = function(boat_id, name, reg, slip, sliptype, cust_id) {
    var db = dockmobile.webdb.db;
    db.transaction(function(tx) {
        tx.executeSql("INSERT INTO Boats(boat_id, name, reg, slip, sliptype, cust_id) VALUES (?, ?, ?, ?, ?, ?)",
            [boat_id, name, reg, slip, sliptype, cust_id],
            dockmobile.webdb.onSuccess,
            dockmobile.webdb.onError);
    });
}

dockmobile.webdb.addInvoice = function(invoice_id, amount, due_date, desc, cust_id) {
    var db = dockmobile.webdb.db;
    db.transaction(function(tx) {
        tx.executeSql("INSERT INTO OpenInvoices(invoice_id, amount, due_date, desc, cust_id) VALUES (?, ?, ?, ?, ?)",
            [invoice_id, amount, due_date, desc, cust_id],
            dockmobile.webdb.onSuccess,
            dockmobile.webdb.onError);
    });
}

dockmobile.webdb.addCatCode = function(cat_code, desc, cust_id) {
    var db = dockmobile.webdb.db;
    db.transaction(function(tx) {
        tx.executeSql("INSERT INTO Categories(cat_code, desc, cust_id) VALUES (?, ?, ?)",
            [cat_code, desc, cust_id],
            dockmobile.webdb.onSuccess,
            dockmobile.webdb.onError);
    });
}

dockmobile.webdb.onError = function(tx, e) {
    alert("There has been an error: " + e.message);
}

dockmobile.webdb.onSuccess = function(tx, r) {
//    console.log ("This is what I loaded: ", r);
}

dockmobile.webdb.getUpdates = function() {
    var date = '';
    var ParamString = "{'LastModifiedDate':'" + date + "'}"; // Returns list from date forward
    $.ajax({
        type: "POST",
        url: "http://74.115.253.204:3105/DB2Web.asmx/RetrieveAllCustomersJSON",          
        data: ParamString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossdomain: true,
        success: function(response) {
            if(response == null)
			    alert("No new customers found.\r\n\r\nEnter a new Last Modified date.");
		    else {
                var list = eval("(" + response.d + ")");
                var custlen = list.customers.length - 1;  // Get the number of customers in the array
                for (i = 0; i < custlen; ++i) {
                    dockmobile.webdb.addCustomer(list.customers[i].id, list.customers[i].lastname, list.customers[i].firstname, list.customers[i].address1, list.customers[i].address2, list.customers[i].address3, list.customers[i].city, list.customers[i].state, list.customers[i].zip, list.customers[i].phone, list.customers[i].workphone, list.customers[i].cellphone, list.customers[i].email, list.customers[i].balance, list.customers[i].inactivedate, list.customers[i].lastmodifieddate); 
                        if (list.customers[i].boats.length != 0)  {  // Check if customer has boat(s)
                            var boatlen = list.customers[i].boats.length;  // Get the number of boats for this customer
                            for (j = 0; j < boatlen; ++j)  {
                            dockmobile.webdb.addBoat(list.customers[i].boats[j].id, list.customers[i].boats[j].name, list.customers[i].boats[j].reg, list.customers[i].boats[j].slip, list.customers[i].boats[j].sliptype, list.customers[i].id);
                            }
                        }
                        if (list.customers[i].openinvoices.length != 0)  {  // Check if customer has open invoice(s)
                            var invoicelen = list.customers[i].openinvoices.length;  // Get the number of open invoices for this customer
                            for (j = 0; j < invoicelen; ++j)  { 
                            dockmobile.webdb.addInvoice(list.customers[i].openinvoices[j].id, list.customers[i].openinvoices[j].amount, list.customers[i].openinvoices[j].due_date, list.customers[i].openinvoices[j].desc, list.customers[i].id);
                            }
                        }
                        if (list.customers[i].categories) {
                            if (list.customers[i].categories.length != 0)  {  // Check if customer has Category Code(s)
                                var catcodelen = list.customers[i].categories.length;  // Get the number of categories for this customer
                                for (j = 0; j < catcodelen; ++j)  { 
                                dockmobile.webdb.addCatCode(list.customers[i].categories[j].id, list.customers[i].categories[j].desc, list.customers[i].id);
                                }
                            }
                        }
                    
                }
            }
        }
    });
}

function initCustomerDB() {
    dockmobile.webdb.open();
    dockmobile.webdb.createTable();
    dockmobile.webdb.getUpdates();
}