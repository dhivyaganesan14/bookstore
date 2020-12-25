 
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "gutsy",
  host: "localhost",
  password: "Diya1234*",
  database: "book",
});

/**app.post('/api/createAccount', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
con.query(`INSERT INTO NewUser SET username = ? , email = ? , password = ? `, [username , email, password] ,  function(err, result) {

  console.log(username);
  if (err) throw err;
      res.send(' successfully');

    });
});**/
 /*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });*/
app.post("/post", (req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Email = req.body.Email;
  const Password = req.body.Password;
  const PhoneNumber = req.body.PhoneNumber;
  db.query(
    "INSERT INTO signup (FirstName,LastName,Email,PhoneNumber,Password) VALUES (?,?,?,?,?)",
    [FirstName,LastName,Email,Password,PhoneNumber],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.redirect('/signup');

      } else {
        res.send("Values Inserted");
        return res.redirect('/');
      }
    }
  );
});

/*app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});*/


