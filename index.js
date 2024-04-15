const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({                                                  
	host:"sql6.freesqldatabase.com",
	user:"sql6699185",
	password:"Y6IQkfvImB",
	database:"sql6699185"
});


app.post("/save",(req, res) => {
	let data=[req.body.name, req.body.company, req.body.pkg ];
	let sql = "insert into student2 values(?,?,?)";
	con.query(sql,data,(err,result) => {
		if(err) res.send(err);
		else		res.send(result);
	});
});

app.listen(9111, () => { console.log("ready @ 9111 "); });