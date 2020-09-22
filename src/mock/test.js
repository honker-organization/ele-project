const fs = require("fs");
const db = require("./detail.json");

db.rst.activities = db.rst.activities.map((item) => {
  eval(`var a = ${item.attribute}`);
  return {
    ...item,
    attribute: a,
  };
});

fs.writeFileSync("./test.json", JSON.stringify(db));
