const express = require("express");
const app = express();
const { port = 3000 } = process.env;

app.use(express.static(__dirname + "/dist"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
