



var postInspiration = 'https://docs.google.com/spreadsheets/d/1hoRENWMGoEWdXCTQAwJeSYsayPm1-jbodkt_ZBF1dS0/edit#gid=0';

// Load top ten switch hitters.
$('#posteady').sheetrock({
  url: postInspiration,
  query: "select E,F,G"
});