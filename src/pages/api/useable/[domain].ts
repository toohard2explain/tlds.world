// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  useable: boolean,
  query: string
}

const dnsPromises = require('dns').promises;

async function hostnameExists(hostname: string) {
  try {
    await dnsPromises.lookup(hostname);
    return { hostname, exists: true };
  } catch (_) {
    return { hostname, exists: false };
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { domain } = req.query;

  if (!domain) res.status(500);

  (async function(){;
    const domainString = domain!.toString();
    const hostnameExist = await hostnameExists(domainString)

    res.status(200).json({ useable: !hostnameExist.exists, query: domainString })
  })()
}