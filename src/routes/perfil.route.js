// import Perfis from '../controller/perfil'

// export default routes => {
//     app
//     .route('/api/perfis')
//     .all(app.auth.authenticate())
//     .get(Perfis.listByAtivo)
//     .post(Perfis.create)
//     app
//     .route('/api/perfis/id/:id')
//     .all(app.auth.authenticate())
//     .get(Perfis.listOne)
//     .put(Perfis.update)
//     app
//     .route('/api/perfis/:idInt')
//     .all(app.auth.authenticate())
//     .get(Perfis.listOneIdInt)
//     app
//     .route('/api/all/perfis')
//     .all(app.auth.authenticate())
//     .get(Perfis.list)
//     app
//     .route('/api/perfis/enable/:id')
//     .all(app.auth.authenticate())
//     .put(Perfis.enable)
//     app
//     .route('/api/perfis/disable/:id')
//     .all(app.auth.authenticate())
//     .put(Perfis.disable)
// }