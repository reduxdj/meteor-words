Package.describe({
  name: "reduxfj:meteor-words",
  summary: "A Meteor Wrapper for Wordnet",
  version: "0.0.9",
  git: "https://github.com/reduxdj/meteor-words"
});

Npm.depends({
  "node-wordnet" : "0.1.11",
  "wndb-with-exceptions" : "3.0.1"
});

Package.on_use(function (api, where) {
  api.add_files('wordnet.js', 'server')
  api.export('WordNet','server')
  api.export('wndb','server')
});