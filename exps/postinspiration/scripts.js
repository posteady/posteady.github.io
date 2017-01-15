



var postInspiration = 'https://docs.google.com/spreadsheets/d/1hoRENWMGoEWdXCTQAwJeSYsayPm1-jbodkt_ZBF1dS0/edit#gid=0';

// Load top ten switch hitters.
// $('#posteady').sheetrock({
//   url: postInspiration
// });

// Load top five HR leaders.
$('#hr').sheetrock({
  url: postInspiration,
  query: "select A order by A desc",
  fetchSize: 1,
  rowTemplate: HRTemplate
});

var HRTemplate = Handlebars.compile($('#hr-template').html());

