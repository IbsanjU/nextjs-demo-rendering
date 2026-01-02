// API route for CSR data
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  timestamp: string
  message: string
  userData: {
    name: string
    email: string
    role: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Simulate some processing delay
  res.status(200).json({
    timestamp: new Date().toISOString(),
    message: 'This data is fetched client-side',
    userData: {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Developer'
    }
  })
}
