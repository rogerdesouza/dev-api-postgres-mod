import { SequelizeConfig } from './config/database/sequelize.config'
import routes from './routes/index'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import env from 'dotenv'

export class App {

  constructor() {
    env.config()
    this.url = process.env.URL || '0.0.0.0'
    this.port = process.env.PORT || '9000'
    this.nodeEnv = process.env.NODE_ENV || 'development'
    this.database = new SequelizeConfig()
    this.app = express()
    this.middlewares()
    this.getRoutes()
    this.dataBaseConn()
    this.listen()
  }

  getApp() {
    return this.app
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(morgan('dev'))
  }

  getRoutes() {
    routes(this.app)
    // routes(this.app, this.auth)
  }

  async dataBaseConn() {
    try {
      const db = this.database.getConnection()
      await db.authenticate()
      console.log('Connection with database has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in ${this.nodeEnv} mode on http://${this.url}:${this.port}`)
    })
  }

}