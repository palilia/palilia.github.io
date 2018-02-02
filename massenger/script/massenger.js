// $(document).ready(function() {
// 	$('#show').click(function(){
// 		$('.uk-nav').show(1000);
// 	});
// });

// function myFunction() {
//     var x = document.getElementById("uk-nav");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

$(document).ready(function(){
    $('#show').click(function(event) {        
         $('#uk-nav').toggle('show');
    });
});