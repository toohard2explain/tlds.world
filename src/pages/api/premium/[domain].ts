// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  premium: boolean;
  query: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { domain } = req.query;

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const tld = domain!.toString().split(".").pop();
  const sld = domain!.toString().split(".").shift();

  console.log(tld, sld);

  fetch(
    "https://registration.domain.com/domains/search/" +
      sld +
      "." +
      tld +
      "?suggestions=1" +
      "&registry_premium=true" +
      "&propertyID=47" +
      "&searchTerm=" +
      sld +
      "&tlds=" +
      tld +
      "&aftermarket=true",
  )
    .then((response) => response.json())
    .then((result) => {
      const premium = result.results[0].domainInfo.premium;
      res.status(200).json({ premium: premium, query: domain!.toString() });
    })
    .catch((error) => {
      res.status(200).json({ premium: false, query: domain!.toString() });
    });
}
