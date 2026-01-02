// API route for SSG data
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  timestamp: string
  message: string
  items: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    timestamp: new Date().toISOString(),
    message: 'This data is fetched from the SSG API route',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
  })
}
