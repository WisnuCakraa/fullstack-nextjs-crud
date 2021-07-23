import db from '../../../libs/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { title, genre, chapter, synopsis, content } = req.body

  const create = await db('novels').insert({
    title,
    genre,
    chapter,
    synopsis,
    content
  })

  const createdData = await db('novels').where('id', create).first();

  res.status(200);
  res.json({
    message: 'novels created succesfuly',
    data: createdData
  })
}
