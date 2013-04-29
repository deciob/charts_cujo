(function() {
  define(["charter"], function(charter) {
    return function(charter) {
      var barchart, fake_data, selection;

      fake_data = [
        [
          {
            "name": "a43d",
            "max": 88,
            "values": [
              {
                "name": "entry count",
                "val": 88
              }, {
                "name": "exit count",
                "val": 23
              }
            ]
          }, {
            "name": "4e9a",
            "max": 16,
            "values": [
              {
                "name": "entry count",
                "val": 16
              }, {
                "name": "exit count",
                "val": 6
              }
            ]
          }
        ]
      ];
      barchart = charter;
      barchart.width(600);
      barchart.height(500);
      barchart.margin({
        top: 20,
        right: 250,
        bottom: 20,
        left: 30
      });
      barchart.events(["onHover"]);
      selection = d3.select("#chart");
      selection.data(fake_data);
      return selection.call(barchart);
    };
  });

}).call(this);
