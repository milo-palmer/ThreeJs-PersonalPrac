import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getAllShoes()
    res.json(data)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const shoe = await db.getShoeById(+id)
    res.json(shoe)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

export default router
