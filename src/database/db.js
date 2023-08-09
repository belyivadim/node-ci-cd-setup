class DataAccess {
  constructor() {
    const Pool = require('pg').Pool
    this.db = new Pool({
      connectionString: process.env.DATABASE_URL,
      // user: process.env.POSTGRES_USER,
      // password: process.env.POSTGRES_PASSWORD,
      // host: 'pg_db',
      // port: 5432,
      // database: process.env.POSTGRES_DB
    })
  }

  async createMovie(movie) {
    const sql = 'INSERT INTO movies(title, release_year, genre, price) VALUES ($1, $2, $3, $4) RETURNING *;'
    const newMovie = await this.db.query(sql, [movie.title, movie.release_year, movie.genre, movie.price])
    return { status: (newMovie.rows.length > 0 ? 201 : 400), body: newMovie.rows[0] }
  }

  async getAllMovies() {
    const sql = 'SELECT * FROM movies;'
    const movies = await this.db.query(sql)
    return { status: 200, body: movies.rows }
  }

  async getMovieById(id) {
    const sql = 'SELECT * FROM movies WHERE id = $1;'
    const movies = await this.db.query(sql, [id])
    return { status: (movies.rows.length > 0 ? 200 : 404), body: movies.rows[0] }
  }
}

module.exports = new DataAccess()
