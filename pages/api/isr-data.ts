// API route for ISR data
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  timestamp: string
  message: string
  randomNumber: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    timestamp: new Date().toISOString(),
    message: 'This data is fetched from the ISR API route',
    randomNumber: Math.floor(Math.random() * 1000)
  })
}
