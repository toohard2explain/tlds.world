// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  whois: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { domain } = req.query;

  (async function () {
    const whois = require("whois-json");

    var results = await whois(domain);

    res.status(200).json({ whois: results });
  })();
}
