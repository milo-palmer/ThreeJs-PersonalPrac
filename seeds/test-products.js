/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { id: 1, name: "Jordan 1's", price: 69.99, model: '/images/Jordans.jpg' },
    {
      id: 2,
      name: 'Nike Air Jordan Petopo',
      price: 259.99,
      model: '/images/Shoe.png',
    },
    { id: 3, name: "Air Force 1's", price: 199.99, model: '/images/Shoe.png' },
  ])
}
