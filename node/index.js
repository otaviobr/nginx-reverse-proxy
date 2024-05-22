const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

let connPool = mysql.createPool({
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
  connectionLimit: 10,
});

const TryConnect = () =>
  new Promise((res, rej) => {
    connPool.getConnection((err, connection) => {
      if (err) {
        connection?.release();
        console.log("Error getting connection: " + err);
        rej(err);
      }

      res(connection);
    });
  });

app.get("/", async (req, res) => {
  let errorMessage =
    "<h1>Full Cycle Rocks!</h1> <h2>No database connected.</h2>";

  try {
    TryConnect()
      .then((con) => {
        con.query("INSERT INTO people(name) values('Otavio')");

        con.query("SELECT id, name FROM people", (err, result) => {
          if (err) {
            console.log(err);
            res.send(errorMessage);
            return;
          }

          var lis = result.map((x) => `<li>${x.id} - ${x.name}</li>`) ?? [];
          lis = `${lis}`.replaceAll(",", " ");

          con.release();

          res.send(`<h1>Full Cycle Rocks!</h1><ul>${lis} </ul>`);
        });
      })
      .catch((x) => {
        console.log("ConnectDatabaseInnerError: " + x);
        res.send(errorMessage);
      });
  } catch (error) {
    console.log("ConnectDatabaseError: " + error);
    res.send(errorMessage);
  }
});

app.get("/health", (req, res) => {
  res.send("health!");
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
