import request from 'superagent'

const url = '/api/v1/shoes/'

export async function getShoes() {
  const response = await request.get(url)
  return response.body
}

export async function getShoeFromId(id: number) {
  const response = await request.get(`${url}${id}`)
  return response.body
}
