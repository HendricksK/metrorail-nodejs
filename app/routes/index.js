//routes/index.js

const metroRoutes = require('./metrorail')

module.exports = function(app, db) {
	metroRoutes(app, db);
	//Other route groups can go here, reminds me of the way I route groups in laravel or slim 
}
