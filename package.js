Package.describe({
  name: "reduxfj:meteor-words",
  summary: "A Meteor Wrapper for wordnet",
  version: "0.0.9",
  git: "https://github.com/reduxdj/meteor-words"
});

Npm.depends({
    "WNdb": "3.0.1"
});

Package.on_use(function (api, where) {
  api.add_files('wordnet.js', 'server');
});