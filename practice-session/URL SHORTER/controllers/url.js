const shortid = require("shortid");
const URL = require("../models/url");

async function GenerateNewShortURL(req, res) {
  const body = req.body;
  try{
  if (!body.url) return res.status(400).json({ error: "url is not found" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
  }catch(err)
  {
    console.log(err);
  }
}

async function comebackurl(req, res) {
  const shortId = req.params.shortid;
try{
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}catch(err)
{
  console.log(err);
}
};

async function GetAnalysis(req, res) {
  const shortId = req.params.shortId;
  try{
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    timeclicks: result.visitHistory,
  });
  }
  catch(err)
  {
    console.log(err);
  }
}

module.exports = {
  GenerateNewShortURL,
  comebackurl,
  GetAnalysis,
};