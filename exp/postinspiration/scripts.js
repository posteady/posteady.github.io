



var postInspiration = 'https://docs.google.com/spreadsheets/d/1hoRENWMGoEWdXCTQAwJeSYsayPm1-jbodkt_ZBF1dS0/edit#gid=0';

// Compile the Handlebars template for HR leaders.
var HRTemplate = Handlebars.compile($('#hr-template').html());

// Load top five HR leaders.
// $('#hr').sheetrock({
//   url: mySpreadsheet,
//   query: "select A,C,D,I order by I desc",
//   fetchSize: 5,
//   rowTemplate: HRTemplate
// });
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$("#hr").sheetrock({
            url: postInspiration,
            sql: "select  A, B, C",
            formatting: false,
            dataHandler: formatData,
            rowTemplate: HRTemplate,
            callback: function (error, options, response) {
            	console.log(error, options, response);
            	var numberofamazingsentences = $('.sentence').length;
var random = Math.floor(Math.random()*numberofamazingsentences);
$(".sentence").eq(random).addClass('trulyinspirational');
            }
        });
    
    function formatData(theData) {
    	alert("hi");
    }

$(window).keypress(function(e) {
    if (e.which === 32) {
    	$(".trulyinspirational").removeClass('trulyinspirational');
        var numberofamazingsentences = $('.sentence').length;
		var random = Math.floor(Math.random()*numberofamazingsentences);
		$(".sentence").eq(random).addClass('trulyinspirational');
    }

    $( 'body' ).css( "background-color", getRandomColor );
    $( '.trulyinspirational' ).css( "color", getRandomColor );

});
