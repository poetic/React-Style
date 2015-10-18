Package.describe({
  name: 'poetic:react-style',
  version: '0.0.1-rc.1',

  summary: 'Set styles of a react component from multiple sources'
});

Package.onUse(function(api){

api.versionsFrom('1.2.0.1');

  var packages = [
    'react@0.1.13',
    'markoshust:radium@0.0.3',
  ];

  api.use(packages, ['client', 'server']);

  api.addFiles([
    'client/styleable.jsx',
  ],'client');

  api.export('StyleableFactory', 'client');
});

