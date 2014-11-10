function listPosts (data) {
	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

	output += '<ul data-role="listview" data-filter="true" data-input="#searchposts">';
	$.each(data.posts, function(key, val)  {

		var tempDiv = document.createElement("tempDiv");
		tempDiv.innetHTML = val.excerpt;
		$("a" , tempDiv).remove();
		var excerpt = tempDiv.innerHTML;

		output += '<li>';
		output += '<a href="#blogpost" onclick = "showPost (' + val.id + ')">';
		output += '<h3>' + val.title + "</h3>";
		output += '<p>' + val.title + "</p>";
		output += '</a>';
		output += '</li>';
	}); 

	output += "</ul>";
	$('#postlist').html(output);

} //listPosts


function showPost(id) {
	$.getJSON('http://press-stars.com/?json=get_post&post_id=' + id + '&callback=?',
	function(data) {
		var output = '<h3>' + data.post.title + '</h3>';
		output += data.post.content;
		$('#mypost').html(output);

	});

}