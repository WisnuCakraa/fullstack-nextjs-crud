import db from '../../../libs/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const post = await db('novels');

  res.status(200)
  res.json({
    message: 'berhasil mendapatkan post',
    data: post
  })
}