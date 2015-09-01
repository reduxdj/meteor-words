Package.describe({
  name: "reduxfj:meteor-words",
  summary: "A Meteor Wrapper for wordnet",
  version: "0.0.9",
  git: "https://github.com/reduxdj/meteor-words"
});

Npm.depends({
  "node-wordnet" : "0.1.11",
  "wndb-with-exceptions" : "3.0.1"
});

Package.on_use(function (api, where) {
  api.add_files('wordnet.js', 'server');
  api.use(
    [
    'meteorhacks:npm@1.4.0',
    'meteorhacks:unblock@1.1.0'
    ],
    'server')
  api.export('WordNet','server')
  api.export('wndb','server')
});