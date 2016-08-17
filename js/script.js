
$(document).ready(function() {

	$(function () {
		$('[data-toggle="popover"]').popover()
	});

	$('[data-toggle="popover"]').popover({
	    container: 'body'
	});

	$('body').scrollspy({ target: '#scrolled' })


	$('body').on('click', function (e) {
	    $('[data-toggle="popover"]').each(function () {
	        //the 'is' for buttons that trigger popups
	        //the 'has' for icons within a button that triggers a popup
	        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	            $(this).popover('hide');
	        }
	    });
	});

	var columns = ["rwanda", "china", "indonesia", "india", "pakistan"];
	var classNames = [],
		idNames = [],
		name;

	for (i = 0; i < columns.length; i++) {
		newName = "." + columns[i];
		classNames.push(newName);

		newID = "#" + columns[i];
		idNames.push(newID);

	}

	// Hide all the cool new info.
	$(classNames.join()).hide();
	$(idNames.join()).css('cursor', 'pointer');
	
	// Hmm, for loop doesn't work here
	// Edit by Eric Dodge:
	// Need to remove all the info from the non-clicked classnames before toggling, 
	// or else we will get multiple countries' worth of info appended to the popover box.
	$('#rwanda').click(function() {
		var tempNames = [];
		var tempString = '.'+this.id;
		for (var i=0;i<classNames.length;i++) {
			if (classNames[i]!==tempString) {
				tempNames.push(classNames[i]);
			}
		}
		$(tempNames.join()).hide();
		$('.rwanda').toggle();
	})

	$('#china').click(function() {
		var tempNames = [];
		var tempString = '.'+this.id;
		for (var i=0;i<classNames.length;i++) {
			if (classNames[i]!==tempString) {
				tempNames.push(classNames[i]);
			}
		}
		$(tempNames.join()).hide();
		$('.china').toggle();
	})

	$('#indonesia').click(function() {
		var tempNames = [];
		var tempString = '.'+this.id;
		for (var i=0;i<classNames.length;i++) {
			if (classNames[i]!==tempString) {
				tempNames.push(classNames[i]);
			}
		}
		$(tempNames.join()).hide();
		$('.indonesia').toggle();
	})

	$('#india').click(function() {
		var tempNames = [];
		var tempString = '.'+this.id;
		for (var i=0;i<classNames.length;i++) {
			if (classNames[i]!==tempString) {
				tempNames.push(classNames[i]);
			}
		}
		$(tempNames.join()).hide();
		$('.india').toggle();
	})

	$('#pakistan').click(function() {
		var tempNames = [];
		var tempString = '.'+this.id;
		for (var i=0;i<classNames.length;i++) {
			if (classNames[i]!==tempString) {
				tempNames.push(classNames[i]);
			}
		}
		$(tempNames.join()).hide();
		$('.pakistan').toggle();
	})


})




