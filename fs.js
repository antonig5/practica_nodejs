const fs = require("fs");
fs.readFile("./texto.text", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
