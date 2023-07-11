const { Router } = require("express");
const insert = require("../repo/user/insert");
const select = require("../repo/user/select");

function user() {
  const router = Router();

  router.get("/insert", insert());
  router.get("/select", select());

  return router;
}

module.exports = user;
