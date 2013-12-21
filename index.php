<!DOCTYPE HTML>
<html lang="en" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="shortcut icon" href="favicon.ico">
	
	<title>Recipe Share Network</title>

<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/layout.css" rel="stylesheet">
		<link href="css/font-awesome.css" rel="stylesheet">

		<!--[if IE 7]>
		<link rel="stylesheet" href="css/font-awesome-ie7.min.css">
		<![endif]-->

		<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {

				$('.jumbotron').children().each(function() {

					$(this).fadeOut(0);
					$(this).css("position", 'absolute');

				});

				$('#home').fadeIn(1000);
				$('#home').css("position", 'static');

				$(".clear a").click(function() {
					var x = $(this).attr("href");
					$('.jumbotron').children().each(function() {
						$(this).fadeOut(0);
						$(this).css("position", 'absolute');
					});

					$(x).fadeIn(1000);
					$(x).css("visibility", 'visible');
					$(x).css("position", 'static');

				});

				$(".op > *").hide();

				function updateLinks(link, links) {

					var block = link.attr("data-block");
					$("a[data-block!='" + block + "']").parent().removeClass("active");
					$("a[data-block='" + block + "']").parent().addClass("active");

					$(".op > *").hide();
					$("#" + block).show();
				}

				var links = $("a[data-block]");
				if (window.location.hash != "") {
					var link = $("a[href='" + window.location.hash + "']");
					if (link.length > 0) {
						updateLinks(link, links);
					}
				}

				links.click(function() {
					var divId = $(this).attr("href");
					var state = {
						prevhash : divId
					};
					if (window.history.pushState) {
						window.history.pushState(state, $(this).html(), divId);
					}

					updateLinks($(this), links);
					return false;
				});

				if (window.history.pushState) {
					window.onpopstate = function(e) {
						if (e.state) {
							var link = $("a[href='" + window.location.hash + "']");
							updateLinks(link, links);
						} else {
							$(".op > *").hide();
							$("a[data-block]").parent().removeClass("active");
							$("#target").show();

						}
					};
				}

			});
		</script>

</head>
<body>
    <p>Stuff goes here
    <?php

?>
</body>
</html>