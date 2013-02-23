var chromeTrick = 60;
if($.browser.webkit && /chrome/.test(navigator.userAgent.toLowerCase())){
(function ct(){
   if(chromeTrick--){
   $('[id*="pod"]').each(function(){$(this).attr("class",$(this).attr("class"))})
   //$('[id*="pod"]').redraw();
   setTimeout(ct,500); 
  }
})();
}

$(document).ready(function() {
    $("a#credit-info").unbind('click').die('click').live('click', function(e) {
     e.preventDefault();
     var popup = $(".credit-info-popup")
     var popupClass = $(this).closest("#subpanel").length > 0 ? 'customize' : '';
     if (popup.length !== 0 && popup.hasClass('shown'))
        popup.fadeOut(300, function() {$(this).remove();});
     else {
        if (popup.length === 0) {
            var orig = $(this);
            $.get("credhelp.jsp", { "class" : popupClass }, function(d) {
                $("#popanchor").append(d);
                var pos = orig.parent().offset();
                $(".traypopup.credit-info-popup").css({
                  'top' : pos.top - 33,
                  'left' : pos.left + 90 + (popupClass == "customize" ? $("#subpanel-price").width() + 10 : 0)
                });
                $(".credit-info-popup").fadeIn(300).addClass('shown');
            });
        } else popup.fadeIn(300).addClass('shown');
     }
     return false;
    });

    /* this will be added to the main codebase in the next push. -2012 aug 16 */
    $("#genfiles-allsamples .genfiles-sampletype").live("click",function(e){
      e.preventDefault();
      var path = $(this).data("filepath");
      var name = removeFirstSlash(fromLastDir(path));
//      var ext = extractFileExtension(name);
//      if (isDatasetExtension(ext)) {
//	selectFileInput(decodeURIComponent(name), path, "rawdata sample");
//      } else {
	selectFileInput(decodeURIComponent(name), path, "generic sample");
//      }
      $('a#star-inputfield').hide();
      closeInputMethodTabs("genfiles-inputtab".replace("inputtab-", ''));
      $("#calcform-samplequeries").remove();

      var queries = $(this).data("querieslist");
      if (typeof queries != "undefined" && queries.length > 0) {
	queries = queries.split(",");
	var newel = markupSamplesQueriesList(queries);
	//item.append(newel);
	$(newel).appendTo("#calculatecontain");
      }
      $("#calculate #i").focus();
    });

});

function shareSubpodImage(id) {
	var subpod = $("#subpod_" + id);
	var image =$("#i_" + id);
	var imageurl = image.attr('src');
	var width = image.attr('width');
	var imageMSP = imageurl.substring(imageurl.indexOf('/MSP/') + 5, imageurl.indexOf("?"));
	var title = subpod.data('subtitle');
	var fileInput = getFileInputObj();
	var image = undefined; 
	var file = undefined;
	var data = undefined;
	if(fileInput.name && fileInput.name.length > 0) { 
		if(fileInput.type == "image") {
			image = fileInput.name;
		} else if (fileInput.type == "data") {
			data = fileInput.name;
		} else if (fileInput.type == "file"){
			file = fileInput.name;
		}
	}
	if(!title || title.trim().length == 0) {
		title = $("h2:not(.subpod-wrap > h2)", subpod.parent(".pod")).text().trim();
		title = title.substring(0, title.length -1);
	}
	var url =  "subpod.share.jsp";
    $("#lightboxOverlay").show();
	showLightboxLoading();
	$.get(url, 
		{
			'm' : imageMSP, 
			's' : extractSubpodServer($("#subpod_" + id)),
			'i'  : decodeURIComp(getURLParam("i")),
			'width' : width,
			'title' : title,
			'cdnUrl' : (imageurl.indexOf('www.wolframcdn.com') != -1) ? imageurl : undefined,
			'imageUrl' : imageurl,
			'type' : subpod.data("sharetype"),
			"image" : image,
			"data" : data,
			"file" : file,
			"isSampleFile" : decodeURIComp(getURLParam("examplefile"))
		},
		function (data) {
			$("body").append(data);
	        $("#sharesubpod").css("top", $(window).scrollTop() + 50);
	        $("#sharesubpod").show();
	        hideLightboxLoading();
		});
}