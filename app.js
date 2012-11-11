setInterval( function() {
	delete require.cache[require.resolve('./data.js')]
	var data=require('./data.js').data;
	console.log(data);
}, 2000 );
