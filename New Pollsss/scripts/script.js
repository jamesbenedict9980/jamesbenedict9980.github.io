 function Redirect() {
               window.location="homepage.html";
            }

$(document).ready(function() {
    var options = {
        height: "250px",
        width: "250px",
        line_width:20,
        color: "#95c4e0",
        starting_position: 25,
        percent: 25,
        text: "percent"
    }
    var progress_circle = $("#progress-circle").gmpc(options);
    progress_circle.gmpc('animate', 100, 2000);
	setTimeout('Redirect()', 2300);
});

