import { Sequelize } from 'sequelize'
import config from './config'
import env from 'dotenv'

export class SequelizeConfig {

    constructor() {
        env.config()
        this.nodeEnv = process.env.NODE_ENV || 'development'
        this.configuration = config[this.nodeEnv]
        this.connection = new Sequelize(
            this.configuration.database,
            this.configuration.username,
            this.configuration.password,
            this.configuration
        )
    }

    getConnection() {
        return this.connection
    }
}