var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';

// Load top ten switch hitters.
$('#switch-hitters').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,L where E = 'Both' order by L desc",
  fetchSize: 10
});