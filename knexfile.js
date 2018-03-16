// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/starlight_api'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/starlight_api'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
