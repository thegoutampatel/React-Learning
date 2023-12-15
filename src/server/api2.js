var express = require("express");
var cors = require("cors");
var { MongoClient } = require("mongodb");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/getusers", async (req, res) => {
    try {
        const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        const database = client.db("reactdb");
        const users = await database.collection("tblusers").find({}).toArray();
        res.send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/registeruser", async (req, res) => {
    try {
        const userdetails = {
            UserId: req.body.UserId,
            UserName: req.body.UserName,
            Age: parseInt(req.body.Age)
        };

        const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        const database = client.db("reactdb");
        const result = await database.collection("tblusers").insertOne(userdetails);

        console.log("Record Inserted:", result.insertedId);
        res.redirect("/getusers");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server started: http://127.0.0.1:${PORT}`);
});