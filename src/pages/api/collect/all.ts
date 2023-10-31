// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TopLevelDomain from '@/TopLevelDomain';
import PorkbunCollector from '@/lib/PorkbunCollector';
import SpaceshipCollector from '@/lib/SpaceshipCollector';
import { TopLevelDomainPricingInfo } from '@/lib/TopLevelDomainPricingInfo';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    porkbun: TopLevelDomainPricingInfo[],
    spaceship: TopLevelDomainPricingInfo[],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  (async function(){
    const porkbunCollector: PorkbunCollector = new PorkbunCollector();
    const spaceshipCollector: SpaceshipCollector = new SpaceshipCollector();

    porkbunCollector.collect().then((data) => {
        spaceshipCollector.collect().then((data2) => {
            res.status(200).json({ porkbun: data, spaceship: data2 })
        });
    });
  })()
}
