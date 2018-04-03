//notes routes

var ObjectID = require('mongodb').ObjectID;
var metroEndPoint = require('../../config/metro_api');

module.exports = function(app, db) {

	//GET
	app.get('/rail/ping', (req,res) => {
	
		res.send('pong');

	});

	// //GET
	app.get('/metro-rail/updates/line_name/:line', (req,res) => {
	
		var line_name = req.params.line;

		var details = { 'line_name': line_name };	

	    db.collection('metro-rail').find(details).toArray( (err, result) => {
	      	if (err) {
	        	res.send({'error':'An error has occurred -> ' + err});
	      	} else {
	      		res.send(result);
	      	}
		});
	});

	// //GET
	app.get('/metro-rail/updates/train_id/:train_id', (req,res) => {
	
		var train_id = req.params.train_id;

		var details = { 'train_id': train_id };	

	    db.collection('metro-rail').find(details).toArray( (err, result) => {
	      	if (err) {
	        	res.send({'error':'An error has occurred -> ' + err});
	      	} else {
	      		res.send(result);
	      	}
		});
	});

	// //POST
	app.post('/metro-rail/update', (req,res) => {

		var update = { 
			line_name: req.body.line_name, 
			train_id: req.body.train_id 
		};
	    
	    db.collection('metro-rail').insert(update, (err, result) => {
	      	if (err) { 
	        	res.send({ 'error': 'An error has occurred -> ' + err }); 
	      	} else {
	        	res.send(result.ops[0]);
	      	}
	    });
	})

	// //DELETE
	// app.delete('/notes/:id', (req, res) => {

 //    	var id = req.params.id;
 //    	var details = { '_id': new ObjectID(id) };

	//     db.collection('notes').remove(details, (err, item) => {
	//       	if (err) {
	//         	res.send({'error':'An error has occurred'});
	//       	} else {
	//         	res.send('Note ' + id + ' deleted!');
	//       	} 
 //    	});
 //  	});

	// //PUT also known as UPDATE
 //  	app.put('/notes/:id', (req, res) => {

 //    	var id = req.params.id;
 //    	var details = { '_id': new ObjectID(id) };
 //    	var note = { text: req.body.body, title: req.body.title };
		    
	// 	db.collection('notes').update(details, note, (err, result) => {
	// 	    if (err) {
	// 	        res.send({'error':'An error has occurred'});
	// 	    } else {
	// 	        res.send(note);
	// 	    } 
	// 	});
 //  });


};