// var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';

// // Load top ten switch hitters.
// $('#switch-hitters').sheetrock({
//   url: mySpreadsheet,
//   query: "select A,B,C,D,E,L where E = 'Both' order by L desc",
//   fetchSize: 10
// });



var postInspiration = 'https://docs.google.com/spreadsheets/d/1hoRENWMGoEWdXCTQAwJeSYsayPm1-jbodkt_ZBF1dS0/edit?usp=sharing';

// Load top ten switch hitters.
$('#posteady').sheetrock({
  url: postInspiration
});