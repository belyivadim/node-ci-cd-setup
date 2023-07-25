const { spec } = require('pactum')

const PORT = process.env.PORT || 8080

it('Silly /api test', async () => {
  await spec()
    .get(`http://localhost:${PORT}/api`)
    .expectStatus(200)
    .expectJson({
      message: 'OK'
    })
})

it('Silly /api/plus-one?number= test', async () => {
  await spec()
   .get(`http://localhost:${PORT}/api/plus-one`)
    .withQueryParams('number', 5)
    .expectStatus(200)
    .expectJson({
      answer: 6
    })
})

it('Silly /api/users/{user_id} test', async () => {
  await spec()
   .get(`http://localhost:${PORT}/api/users/{user_id}`)
    .withPathParams('user_id', 0)
    .expectStatus(200)
    .expectJson({
      username: 'Admin'
    })
})
