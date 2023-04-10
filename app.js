const express = require("express"); // import

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/", (req, res) => {
  res.send("This is Post Request");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
