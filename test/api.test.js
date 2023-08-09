const { spec } = require('pactum')

const PORT = process.env.PORT || 8080
const ADDR = process.env.ADDR || 'localhost'

it('Silly /api test', async () => {
  await spec()
    .get(`http://${ADDR}:${PORT}/api`)
    .expectStatus(200)
    .expectJson({
      message: 'OK'
    })
})

it('Silly /api/plus-one?number= test', async () => {
  await spec()
   .get(`http://${ADDR}:${PORT}/api/plus-one`)
    .withQueryParams('number', 5)
    .expectStatus(200)
    .expectJson({
      answer: 6
    })
})

it('Silly /api/users/{user_id} test', async () => {
  await spec()
   .get(`http://${ADDR}:${PORT}/api/users/{user_id}`)
    .withPathParams('user_id', 0)
    .expectStatus(200)
    .expectJson({
      username: 'Admin'
    })
})

it('Try db connection /api/movies/', async () => {
  await spec()
   .get(`http://${ADDR}:${PORT}/api/movies`)
    .expectStatus(200)
})

