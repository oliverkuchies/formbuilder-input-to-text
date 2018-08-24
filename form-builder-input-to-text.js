var html = "";
$(".rendered-form p, .rendered-form h1, .rendered-form h2, .rendered-form h3, .rendered-form h4, .rendered-form h5, .rendered-form h6, .rendered-form input[type='checkbox']:checked, .rendered-form input[type='text'], .rendered-form input[type='radio']:checked,.rendered-form select, .rendered-form textarea, .rendered-form input[type='number']").each(function(){
	var current = "";
	var label = "";
	if ($(this).prop('nodeName') == 'H1' || 
        $(this).prop('nodeName') == 'H2' || 
        $(this).prop('nodeName') == 'H3' ||
        $(this).prop('nodeName') == 'H4' || 
        $(this).prop('nodeName') == 'H5' || 
        $(this).prop('nodeName') == 'H6' || 
		$(this).prop('nodeName') == 'P' 
	)
	{
    	html += '<'+ $(this).prop('nodeName') + '>' + $(this).html() + '</'+ $(this).prop('nodeName') + '>';
	}
    else if ($(this).attr('type') == "radio"){
    	id = $(this).attr('id');
		label = $(this).parent().parent().parent().find("label").first().text() + "</b>" + ": " + $("#"+id + ":checked").parent().find("label").text()
	}
	else if ($(this).attr('type') == "checkbox"){
        label = $(this).parent().find("label").text();
		current = $(this).is(':checked') == true ? "Yes":"No";
    }
	else if ($(this).attr('type') == "select"){
		id = $(this).attr('id');
        label = $(this).parent().find("label").text();
		current = $("#"+id+" option:selected").text()
	}
	else{
		label = $(this).parent().find("label").text();
		current = $(this).val()
	};

	if ((typeof(label) != "undefined") && typeof(current) != "undefined" && label != "" && current != ""){
		html += "<p><b>"+label + "</b>: "+ current + "</p>";
    }
});
$(".rendered-form").html(html);
