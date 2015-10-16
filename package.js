Package.describe({
  	name: 'noshpit:styleable',
  	version: '0.0.1',
});

Package.onUse(function(api){

	api.versionsFrom('1.2.0.1');

	var packages = [
		'react@0.1.13',
		'markoshust:radium@0.0.3',

	];

	//api.imply(packages, ['client', 'server']);
	api.use(packages, ['client', 'server']);

	api.addFiles([

    'client/styleable.jsx',

  	],'client');

  	api.export('Styleable', client);

});

/*
Package.onTest(function (api) {

	api.use("tinytest", ["client", "server"]);
});
*/