const express = require("express");
const {
  GenerateNewShortURL,
  comebackurl,
  GetAnalysis,
} = require("../controllers/url");

const router = express.Router();

router.post("/",GenerateNewShortURL);
router.get('/redirect/:shortid',comebackurl)

router.get("/timeclicks/:shortId", GetAnalysis);

module.exports = router;
