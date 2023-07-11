const db = require("../../dbConnection");
function insert() {
  return (req, res) => {
    db.query("SELECT * FROM public.user", (err, result) => {
      if (err) {
        throw err;
      }
      return res.send(result.rows);
    });
  };
}
module.exports = insert;
