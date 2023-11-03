// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TopLevelDomain from "@/TopLevelDomain";
import PorkbunCollector from "@/lib/PorkbunCollector";
import SpaceshipCollector from "@/lib/SpaceshipCollector";
import { TopLevelDomainPricingInfo } from "@/lib/TopLevelDomainPricingInfo";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { domain } = req.query;

  (async function () {
    const collector: PorkbunCollector = new PorkbunCollector();

    collector.collect().then((data) => {
      res.status(200).json({ data: data });
    });
  })();
}
