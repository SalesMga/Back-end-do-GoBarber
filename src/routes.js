const {Router} = require('express'); //importa somente o Router, ao inves do express inteiro

const routes = new Router(); //instancia uma nova rota

routes.get('/', (req, res)=>{
  return res.json({message: 'Ola Lucas Sales'});
});

export default routes;