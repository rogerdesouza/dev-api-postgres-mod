export default function routes (app) {
    app.get('*', (req, res) =>
        res.status(200).send({
            message: 'JS-NODE-MOD'
        })
    )
}


// import PerfilRoutes from './perfil/perfil.route'
// import { IAuthStrategy } from '../config/middlewares/auth/IAuthStrategy'

// export default function routes (app, auth) {
//     routes.get('/api', (req, res) =>
//         res.status(200).send({
//             message: 'JS-NODE-MOD'
//         })
//     )

    // PerfilRoutes(app, auth)
    // ou
    // PerfilRoutes(app)
// }