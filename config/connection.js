// import the mysql package
var mysql = require("mysql");

// Set up MySQL database connection.
var connection = mysql.createConnection({
  host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "jcb1295dzkag65wt",
  password: "h1dq4ucdncnv6w1k",
  database: "vhlfyz1ofkfmvvcq"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
