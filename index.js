const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const user = require("./routes/user");

app.use("/", user());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
