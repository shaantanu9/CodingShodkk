import axios from 'axios'
import type { NextApiHandler } from 'next'
const countHandler: NextApiHandler = async (request, response) => {
  const { amount = 1 } = request.body

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  response.json({ data: amount })
}

const login: NextApiHandler = async (request, response) => {
  const { email, password } = request.body

  console.log('email', email);
  console.log('email', email);

  // return axios.post

}


export default countHandler
