var fs = require('fs');

function reprint() {
	delete require.cache[require.resolve('./data.js')]
	var data=require('./data.js').data;
	console.log(data);
}

console.log('app loaded, now make some changes to data in data.js');

fs.watchFile('./data.js', function() {
	reprint();
});
