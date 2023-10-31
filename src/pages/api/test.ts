// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SpaceshipCollector from '@/lib/SpaceshipCollector';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { domain } = req.query;

  (async function(){
    const collector: SpaceshipCollector = new SpaceshipCollector();

    collector.collect().then((data) => {
      res.status(200).json({ data: data })
    });
  })()
}
