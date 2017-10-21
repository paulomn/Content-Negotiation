module.exports = function(application){
	
	application.get('/', function(req, res){

		/*//According to Accept property
		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS!');
			},
			json: function(){
				res.json({body: 'Bem vindo a sua app NodeJS!'});
			}
		});*/
		res.render('xxxx');

	});



	application.post('/', function(req, res){
			
		var data = req.body;

		res.send(data);
	});
}