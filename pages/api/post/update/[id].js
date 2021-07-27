import db from '../../../../libs/db';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).end();

  const { id } = req.query;
  const { title, genre, chapter, synopsis, content } = req.body;

  const update = await db('novels').where({ id }).update({ title, genre, chapter, synopsis, content })

  const updatedData = await db('novels').where({ id }).first();
  res.status(200)
  res.json({
    message: 'post update berhasil',
    data: updatedData
  })
}