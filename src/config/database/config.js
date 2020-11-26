import env from 'dotenv'
env.config()

const config = {
    development: {
        database: process.env.DB_NAME || 'mod',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || '123',
        host: process.env.DB_HOST || '0.0.0.0',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: true
    },
    test: {
        database: process.env.DB_NAME || 'mod_test',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || '123',
        host: process.env.DB_HOST || '0.0.0.0',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: true
    },
    production: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false
    }
}

export default config
