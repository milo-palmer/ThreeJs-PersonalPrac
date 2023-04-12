/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      id: 1,
      name: "Jordan 1's",
      price: 699.99,
      image: '/images/Jordans.jpg',
      model: '/models/jordan1.glb',
    },
    {
      id: 2,
      name: 'Nike Air Jordan',
      price: 259.99,
      image: '/images/Shoe.png',
      model: '/models/airjordan.glb',
    },
    {
      id: 3,
      name: "Air Force 1's",
      price: 199.99,
      image: '/images/air1.jpg',
      model: '/models/airforce1.glb',
    },
    {
      id: 4,
      name: 'Nike Hyperdunk',
      price: 299.99,
      image: '/images/hyperdunk.avif',
      model: '/models/hyperdunk.glb',
    },
  ])
}
