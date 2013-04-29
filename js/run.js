(function() {
  var config;

  config = {
    base_url: "../",
    pluginPath: 'lib/curl/src/curl/plugin',
    packages: [
      {
        name: "charter",
        location: "lib/charter",
        main: "index"
      }
    ]
  };

  curl(config, ["charter", "js/main"]).then(function(charter, main) {
    return main(charter());
  }, function(err) {
    return console.log(err.message);
  });

}).call(this);
