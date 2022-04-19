// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

interface Response {
    name: string;
    age: number;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    res.status(200).json({ name: 'John Doe', age: 42 });
}
