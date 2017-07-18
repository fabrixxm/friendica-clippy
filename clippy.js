clippy.BASE_PATH = baseurl + '/addon/clippy/vendor/clippy.js/agents/';
console.log("//clippy//", clippy.BASE_PATH);
clippy.load('Clippy', function(agent){
	console.log("Agent:",agent);
	// do anything with the loaded agent
	agent.show();

	// animate when deleting a post
	$("body").on("click", ".btn-link.navicon.delete", function(){
		agent.play("EmptyTrash");
	});

	// animate when opening jot
	$("#jotOpen").on("click", function() {
		agent.play("CheckingSomething");
	});
	// animate when sending post. wait for animation end before post form
	$("body").on("submit", "#profile-jot-form", function(e){
		var form = $(this);
		agent.stop();
		agent.play("SendMail");
	});

	// animate when writting in search box
	$("body").on("keydown","#nav-search-input-field, .form-search", function(){
		agent.play("Searching");
	});
	$("body").on("blur","#nav-search-input-field, .form-search", function() {
		agent.stop();
	});
	
	// animate on notifications
	$('nav').bind('nav-update', function(e, data){
		var notkeys = ['net', 'home', 'intro', 'mail', 'events', 'notify']
		for(k in notkeys) {
			var number = data[notkeys[k]];
			if (number > 0) {
				var eo = $("#notify-update").offset();
				agent.play("Wave");
				agent.gestureAt(eo.left, eo.top);
				break;
			}
		}

		$(data.sysmsgs.notice).each(function(key, message){
			agent.speak($(`<p>${message}</p>`).text());
		});
		if (data.sysmsgs.info.length) agent.play("GetAttention");
		$(data.sysmsgs.info).each(function(key, message){
			agent.speak($(`<p>${message}</p>`).text());
		});
	})

});
