const db = require("../../dbConnection");

function insert() {
  return (req, res) => {
    db.query(
      "INSERT INTO public.user (id,username,fullname) VALUES(39,'WEWD','Bahrien')",
      (err, result) => {
        if (err) {
          throw err;
        }
        return res.send({ result });
      }
    );
  };
}
module.exports = insert;
