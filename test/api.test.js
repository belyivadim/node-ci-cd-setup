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
