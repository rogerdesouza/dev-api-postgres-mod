import { Sequelize } from 'sequelize'
import config from './config'
import env from 'dotenv'

// Models
import Pessoa from './pessoa.model'

// Buffer
const models = [Pessoa]

class DataBase {

    constructor() {
        this.init()
    }

    init() {
        env.config()
        this.nodeEnv = process.env.NODE_ENV || 'development'
        this.configuration = config[this.nodeEnv]

        // Inicializa conexao
        this.connection = new Sequelize(
            this.configuration.database,
            this.configuration.username,
            this.configuration.password,
            this.configuration
        )

        // Percorre o vetor e acessa o método inicializador
        models.map(model => model.init(this.connection))
    }
}

export default new DataBase()