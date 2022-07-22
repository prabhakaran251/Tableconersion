var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "skp"
});
var otcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "medical1"
});
  
// for user table
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT usermail,birthdate,username,phoneno,altphoneno,password,uaddress,created_by,created_at FROM users", function (err, result, fields) {
    if (err) throw err;
   //console.log(result);
   var arr= result.map(Object.values);
    //console.log(arr);
        otcon.connect(function(err) {
        if (err) throw err;
        var sql="INSERT INTO users (emailaddr,dateofbirth,uname,phoneno,altphoneno,upassword,fulladdress,created_by,created_time) VALUES ?";         
        otcon.query(sql,[arr], function (err, result1){
        if (err) throw err;
        console.log("no.of.record inserted "+result1.affectedRows);
    })    
    })
    });
});
     
// for Vendors table
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT vname,cname,gstno,vemail,vphone,vaddress,vcreated_by,vcreated_at FROM vendors", function (err, result, fields) {
    if (err) throw err;
   //console.log(result);
   var arr= result.map(Object.values);
    //console.log(arr);
        otcon.connect(function(err) {
        if (err) throw err;
        var sql="INSERT INTO vendors (firmname,repname,gstnum,emailid,phonenumber,vaddress,created_by,created_time) VALUES ?";         
        otcon.query(sql,[arr], function (err, result1){
        if (err) throw err;
        console.log("no.of.record inserted "+result1.affectedRows);
    })    
    })
    });
});

//for staffpurchase export table and import

// for pur_payments nothing data   

// for product table
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT pname,ptype,pbrand,categories,pschedule,created_by,created_at FROM product", function (err, result, fields) {
    if (err) throw err;
   //console.log(result);
   var arr= result.map(Object.values);
    //console.log(arr);
        otcon.connect(function(err) {
        if (err) throw err;
        var sql="INSERT INTO products (product_name,product_type,brandname,categories,schedule,created_by,created_time) VALUES ?";         
        otcon.query(sql,[arr], function (err, result1){
        if (err) throw err;
        console.log("no.of.record inserted "+result1.affectedRows);
    })    
    })
    });
});

// for patientdetails table
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT patientname,patientid,patientage,patientphno,patientadd,submitname,submitime FROM patientdetails", function (err, result, fields) {
    if (err) throw err;
   //console.log(result);
   var arr= result.map(Object.values);
    //console.log(arr);
        otcon.connect(function(err) {
        if (err) throw err;
        var sql="INSERT INTO custinfo (cname,custid,cage,cphoneno,caddr,created_by,created_time) VALUES ?";         
        otcon.query(sql,[arr], function (err, result1){
        if (err) throw err;
        console.log("no.of.record inserted "+result1.affectedRows);
    })    
    })
    });
});

// for purchase table for your side

// for purchasebill table also your side

// thats all about given skp database and run each table seperately database connection eg(above database connection with one table)
