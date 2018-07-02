//import albums-routes
const albumsRoutes = require('./albums-routes');
module.exports = function(app,db){
    albumsRoutes(app,db);
    //another route groups    
}