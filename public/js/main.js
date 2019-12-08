(function() {
  "use strict";

  var pieChart = function() {
    $(".chart").easyPieChart({
      scaleColor: false,
      lineWidth: 4,
      lineCap: "butt",
      barColor: "#FF9000",
      trackColor: "#f5f5f5",
      size: 160,
      animate: 1000
    });
  };

  var skillsWayPoint = function() {
    if ($("#fh5co-skills").length > 0) {
      $("#fh5co-skills").waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(pieChart, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  $(function() {
    skillsWayPoint();
  });
})();
