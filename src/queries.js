const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getProducts = (request, response) => {
    pool.query('SELECT * FROM product ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const createTransaction = async (request) => {
    const { userId, productId , price } = request.body

    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const queryText = 'INSERT INTO product_transaction (user_id, product_id , price , status) VALUES ($1, $2 , $3 , $4)'
      await client.query(queryText, [userId, productId , price , 1])
      await client.query('COMMIT')
    } catch (e) {
      await client.query('ROLLBACK')
      throw e
    } finally {
      client.release()
    }
}

module.exports = {
    getProducts,
    createTransaction,
  }