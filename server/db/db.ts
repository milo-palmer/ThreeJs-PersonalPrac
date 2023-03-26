import config from '../../knexfile'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getAllShoes(db = connection) {
  return db('products')
}

export function getShoeById(id: number, db = connection) {
  return db('products').where('id', id).first()
}
