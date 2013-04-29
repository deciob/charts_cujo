config = 
  base_url: "../",
  pluginPath: 'lib/curl/src/curl/plugin',
  packages: [
    {
      name: "charter"
      location: "lib/charter"
      main: "index"
    }
  ]

curl(config, ["charter", "js/main"])
  .then( 
    (charter, main) ->
      #console.log charter()
      main(charter())
      #console.log main
  ,
    (err) ->
      console.log err.message
  )

  




