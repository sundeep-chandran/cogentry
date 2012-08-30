function DB2Web() { }   // Class Signature

var URL = "http://74.115.253.204:3105/db2web.asmx";

DB2Web.HelloWorld = function (callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {
        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "HelloWorld", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<HelloWorld xmlns=\"DBWC\">" +
			"</HelloWorld></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/HelloWorld");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.CreateNewCustomer = function (CustomerXML, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "CreateNewCustomer", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<CreateNewCustomer xmlns=\"DBWC\">" +
			"<sXmlString>" + DB2Web.ParamToXml(CustomerXML) + "</sXmlString>" +
			"</CreateNewCustomer></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/CreateNewCustomer");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.GetCustomerList = function (callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "GetCustomerList", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<GetCustomerList xmlns=\"DBWC\">" +
			"</GetCustomerList></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/GetCustomerList");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.GetQuantityOnHand = function (ItemId, LocationNumber, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "GetQuantityOnHand", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<GetQuantityOnHand xmlns=\"DBWC\">" +
			"<ItemId>" + ItemId + "</ItemId>" +
            "<LocationNumber>" + LocationNumber + "</LocationNumber>" +
			"</GetQuantityOnHand></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/GetQuantityOnHand");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.GetVendorList = function (callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "GetVendorList", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<GetVendorList xmlns=\"DBWC\">" +
			"</GetVendorList></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/GetVendorList");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.ReadWORequest = function (WOId, CustomerId, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "ReadWORequest", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<ReadWORequest xmlns=\"DBWC\">" +
			"<sWOId>" + WOId + "</sWOId>" +
            "<sCustomerId>" + CustomerId + "</sCustomerId>" +
			"</ReadWORequest></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/ReadWORequest");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.RetrieveAllCustomers = function (LastModifiedDate, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "RetrieveAllCustomers", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<RetrieveAllCustomers xmlns=\"DBWC\">" +
			"<LastModifiedDate>" + LastModifiedDate + "</LastModifiedDate>" +
			"</RetrieveAllCustomers></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/RetrieveAllCustomers");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.RetrieveCustomer = function (CustId, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "RetrieveCustomer", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<RetrieveCustomer xmlns=\"DBWC\">" +
			"<sCustId>" + CustId + "</sCustId>" +
			"</RetrieveCustomer></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/RetrieveCustomer");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.RetrieveInventory = function (OnHandOnly, LastModifiedDate, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "RetrieveInventory", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<RetrieveInventory xmlns=\"DBWC\">" +
			"<OnHandOnly>" + OnHandOnly + "</OnHandOnly>" +
            "<LastModifiedDate>" + LastModifiedDate + "</LastModifiedDate>" +
			"</RetrieveInventory></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/RetrieveInventory");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.RetrieveInventoryItem = function (ItemId, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "RetrieveInventoryItem", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<RetrieveInventoryItem xmlns=\"DBWC\">" +
			"<sItemId>" + ItemId + "</sItemId>" +
			"</RetrieveInventoryItem></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/RetrieveInventoryItem");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.RetrieveLocations = function (LocationCode, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "RetrieveLocations", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<RetrieveLocations xmlns=\"DBWC\">" +
			"<sLocationCode>" + LocationCode + "</sLocationCode>" +
			"</RetrieveLocations></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/RetrieveLocations");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.RetrieveNewLeads = function (NumberToRetrieve, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "RetrieveNewLeads", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<RetrieveNewLeads xmlns=\"DBWC\">" +
			"<NumberToRetrieve>" + NumberToRetrieve + "</NumberToRetrieve>" +
			"</RetrieveNewLeads></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/RetrieveNewLeads");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.RetrieveOrder = function (OrderNumber, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "RetrieveOrder", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<RetrieveOrder xmlns=\"DBWC\">" +
			"<sOrderNumber>" + OrderNumber + "</sOrderNumber>" +
			"</RetrieveOrder></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/RetrieveOrder");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.SearchXref = function (SearchType, XrefString, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "SearchXref", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<SearchXref xmlns=\"DBWC\">" +
			"<sSearchType>" + SearchType + "</sSearchType>" +
			"<sXrefString>" + XrefString + "</sXrefString>" +
            "</SearchXref></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/SearchXref");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.SubmitOrder = function (OrderXML, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "SubmitOrder", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<SubmitOrder xmlns=\"DBWC\">" +
			"<sXmlString>" + DB2Web.ParamToXml(OrderXML) + "</sXmlString>" +
			"</SubmitOrder></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/SubmitOrder");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.UpdateLeadRequest = function (LeadXML, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "UpdateLeadRequest", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<UpdateLeadRequest xmlns=\"DBWC\">" +
			"<Xmldoc>" + LeadXML + "</Xmldoc>" +
			"</UpdateLeadRequest></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/UpdateLeadRequest");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.UpdateWORequest = function (WOXml, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {
        //callback for readystate when it returns
        var Service = URL + "/UpdateWORequest?";

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "UpdateWORequest", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<UpdateWORequest xmlns=\"DBWC\">" +
			"<sXmlString>" + DB2Web.ParamToXml(WOXml) + "</sXmlString>" +
			"</UpdateWORequest></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/UpdateWORequest");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.ValidateCustomerIdPassword = function (CustId, Password, callback) {

    var xmlDoc = null;

    if (window.XMLHttpRequest) {
        xmlDoc = new XMLHttpRequest(); //Newer browsers
    }
    else if (window.ActiveXObject) //IE 5, 6
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlDoc) {
        //callback for readystate when it returns
        var Service = URL + "/ValidateCustomerIdPassword?";

        var self = this;
        xmlDoc.onreadystatechange = function () { self.StateChange(xmlDoc, "ValidateCustomerIdPassword", callback); };

        var soap = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
			"<soap:Envelope " +
			"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
			"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
			"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
			"<soap:Body>" +
			"<ValidateCustomerIdPassword xmlns=\"DBWC\">" +
			"<sCustId>" + OnHandOnly + "</sCustId>" +
            "<sEnteredPassword>" + LastModifiedDate + "</sEnteredPassword>" +
			"</ValidateCustomerIdPassword></soap:Body></soap:Envelope>";

        //set up the soap xml web service call
        xmlDoc.open("POST", URL, true);
        xmlDoc.setRequestHeader("SOAPAction", "DBWC/ValidateCustomerIdPassword");
        xmlDoc.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xmlDoc.send(soap);
    }
    else {
        if (callback) {
            callback(false, "unable to create XMLHttpRequest object");
        }
    }
};

DB2Web.StateChange = function (xmlDoc, method, callback) {
    // Callback supplied for XMLHttpRequest Object to monitor state and retrieve data when returns.
    // PARAM xmlDoc - XMLHttpRequest Object we're watching
    // PARAM callback - Callback function for returning data, signature CallBack(result,data)

    if (xmlDoc.readyState === 4) {
        var text = "";
        var xDoc;

        if (xmlDoc.status === 200) {
            if (window.DOMParser) {
                parser = new DOMParser();
                xDoc = parser.parseFromString(xmlDoc.responseText, "text/xml");
            }
            else // Internet Explorer
            {
                xDoc = new ActiveXObject("Microsoft.XMLDOM");
                xDoc.async = "false";
                xDoc.loadXML(xmlDoc.responseText);
            }

            var NodeName = method + "Result";

            var respText = xDoc.getElementsByTagName(NodeName)[0].childNodes[0].nodeValue;

        }

        // Perform callback with data if callback function signature was provided, 
        if (callback !== null) {
            callback(xmlDoc.status === 200, respText);
        }
    }

};

DB2Web.ParamToXml = function (InputString) {
    var xml = "";

    xml = InputString.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return xml;
};