// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TopLevelDomain from "@/TopLevelDomain";
import PorkbunCollector from "@/lib/PorkbunCollector";
import SpaceshipCollector from "@/lib/SpaceshipCollector";
import { TopLevelDomainPricingInfo } from "@/lib/TopLevelDomainPricingInfo";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  best: TopLevelDomainPricingInfo[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  (async function () {
    const porkbunCollector: PorkbunCollector = new PorkbunCollector();
    const spaceshipCollector: SpaceshipCollector = new SpaceshipCollector();

    const [porkbunData, spaceshipData] = await Promise.all([
      porkbunCollector.collect(),
      spaceshipCollector.collect(),
    ]);

    let best: TopLevelDomainPricingInfo[] = [];
    best = best.concat(porkbunData);

    for (let i = 0; i < best.length; i++) {
      const domain = best[i];
      const spaceshipDomain = spaceshipData.find(
        (d) => d.tld.name === domain.tld.name,
      );
      if (spaceshipDomain) {
        if (spaceshipDomain.priceNew < domain.priceNew) {
          best[i] = spaceshipDomain;
        }
      }
    }

    res.status(200).json({ best: best });
  })();
}
