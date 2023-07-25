const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require('multer');
const path = require('path');


const app = express();
app.use(express.json());


const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "funnyshubhu7",
    database: "register"
})


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads');
    },
    filename: function(req, file, cb) {
      const filename = req.body.filename ? req.body.filename : file.originalname;
      cb(null, filename);
    }
  });
  
  // Set up file upload middleware
  const upload = multer({ storage: storage });
  const fs = require('fs');
  
  // Endpoint for file uploads
  app.post('/uploadfile', upload.single('myFile'), (req, res) => {
    console.log(req.file);
    res.send('File uploaded successfully!');
  });
  
  // Endpoint for file downloads
  app.get('/downloadfile/:filename',cors(), function(req, res) {
    const fileName = req.params.filename;
    const file = __dirname + '/uploads/' + fileName;
    res.download(file, function(err) {
      if (err) {
        console.log('Error downloading file: ' + err);
      } else {
        console.log('File downloaded successfully.');
      }
    });
  });
  
  // Endpoint for listing all files in the uploads directory
  app.get('/listfiles',cors(), function(req, res) {
    const directoryPath = path.join(__dirname, 'uploads');
    fs.readdir(directoryPath, function(err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      res.send(files);
    });
  });
  
  // Enable CORS
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
 

app.post("/login", (req, res) => {
    const prn = req.body.prn;
    const password = req.body.pass;
    con.query("SELECT name FROM students WHERE prn = ? AND password = ?", [prn, password],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})

app.post("/gpasort", (req, res) => {
    const gpa = req.body.gpa;
    
    con.query("SELECT * FROM students WHERE cgpa > ?", [gpa],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                
                    res.send(result);
               
            }
        }
    )
})

app.post("/dream", (req, res) => {
    const char = req.body.char;

    if (char === 'n') {
        con.query("SELECT * FROM students WHERE jobsalary > '5,00,000' AND jobsalary < '9,99,999'", (err,result) => {
            if(err){
                res.send({err: err});
            } else {
                res.send(result);
            }
        });
    }

    if (char === 'd') {
        con.query("SELECT * FROM students WHERE jobsalary > '10,00,000' AND jobsalary < '15,00,000'", (err,result) => {
            if(err){
                res.send({err: err});
            } else {
                res.send(result);
            }
        });
    }

    if (char === 's') {
        con.query("SELECT * FROM students WHERE jobsalary > '15,00,000' AND jobsalary < '20,00,000'", (err,result) => {
            if(err){
                res.send({err: err});
            } else {
                res.send(result);
            }
        });
    }
});

app.post("/back", (req, res) => {
    const query = "SELECT * FROM companydetail WHERE backhiring = 'Yes'";
    con.query(query, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      } else {
        res.send(result);
      }
    });
  });

  app.post("/adminskillmatch", (req, res) => {
    const companyname = req.body.companyname;
    
    con.query("SELECT * FROM companydetail c, students s WHERE c.companyname = ? AND c.skill = s.skills" , [companyname],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                
                    res.send(result);
               
            }
        }
    )
})

app.post("/studentskillmatch", (req, res) => {
    const prn = req.body.prn;
    
    con.query("SELECT * FROM companydetail c, students s WHERE s.prn = ? AND c.skill = s.skills" , [prn],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                
                    res.send(result);
               
            }
        }
    )
})

app.post("/dash", (req, res) => {
    const prn = req.body.prn;
    console.log(prn);
    con.query("SELECT * FROM students where prn = ?" , [prn],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                
                    res.send(result);
               
            }
        }
    )
})

app.post("/backstud", (req, res) => {
    const prn = req.body.prn;
    console.log(prn);
    con.query("SELECT * FROM companydetail c, students s WHERE prn = ? AND c.backhiring = 'Yes' AND s.backlog = 'Yes' ", [prn],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: " You Don't Have any Backlogs "})
                }
            }
        }
    )
})

app.post("/fpass", (req, res) => {
    const email = req.body.email;
    const bplace = req.body.bplace;
    const mname = req.body.mname;
    con.query("SELECT name FROM students WHERE email = ? AND bplace = ? AND mname = ? ", [email, bplace, mname],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG Email OR Answers to Security Questions !"})
                }
            }
        }
    )
})

app.post("/resetpass", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("update students set password = ? where email = ?;", [password,email],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                
                    res.send({message: "Password Updated Successfully !!"})
                
            }
        }
    )
})

 // Enable CORS
 app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.listen(3001, () => {
    console.log("running backend server");
})
