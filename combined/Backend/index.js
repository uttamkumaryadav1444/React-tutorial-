const express = require('express');
const app = express();
const port = 4000;

const m1 = require('./Controller/playerdb');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Hello World!Welcome to the simeple Rest API!");
});

app.get("/test1", m1.funct1);
app.get("/test2", m1.funct2);
app.get("/test3", m1.funct3);
app.get("/test4", m1.funct4);
app.post("/test5", m1.funct5);
app.put("/update1".m1.functUpdate);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



