var iMathTimeout=0;var autocompleteReq=null;function inputDropdown(){var A=$("#i").val();if(!$("#imath").html()){$("#imath").append('<div class="im"></div>').append('<div class="ac"></div>').append('<ul class="moreInput">				<li class="inputtab inputtab-keyboard" data-tab="keyboard"><a href="#"></a></div>				<li class="inputtab inputtab-images" data-tab="images"><a href="#"></a></div>				<li class="inputtab inputtab-datainput" data-tab="datainput"><a href="#"></a></div>				<li class="inputtab inputtab-genfiles" data-tab="genfiles"><a href="#"></a></div>		</ul>').append('<span class="close">x</span>')}autocomplete(A,"/input/autocomplete.jsp?qr=0&",$("#imath .ac"))}function autocomplete(C,B,A){if(autocompleteReq){autocompleteReq.abort()}var D=A;if(D.length<=0){D=$("#imath .ac")}if(C&&C!=""){autocompleteReq=$.getJSON(B+"i="+encodeURIComponent(C),function(H){var J="";var I=$("#i").val();if(H.results&&H.results.length>0&&H.query==I){$.each(H.results,function(N,O){if(N>=6){return false}J+='<a href="'+O.waPath+'" data-pos="'+(N+1)+'" data-sb="'+O.summaryBoxPath+'"><b>'+O.input.substring(0,C.length)+"</b>"+O.input.substring(C.length)+"</a>"});if(J.trim().length>0){D.html(J).show().parent().show();$("#input").addClass("imath")}}else{closeInputDropDown()}if(H.instantMath){var F=$("#imath .im");var K=H.instantMath.exactResult;var L=H.instantMath.approximateResult;var E="";if(K){E=K}else{E=L}if(E){E=$.trim(E);if(E.toLowerCase()!=I.trim()){var M=/\*\^\-*\d+/;var G=E.match(M);if(G){G=G+"";E=E.replace(M,"&times;10<sup>"+G.substring(2)+"</sup>")}if(E.substring(H.length-1)=="."){E=E.substring(0,H.length-1)}F.html(C+"<b> = "+E+"</b>").show().parent().show();$("#input").addClass("imath")}}}})}else{closeInputDropDown()}}function selectInput(C,B){var E=$("#imath a.selected",$(B).parent());var A=$("#imath a",$(B).parent());var G="";if(C==38){var F=E.prev("a");if(F.length>0){E.removeClass("selected");F.addClass("selected");G=F.text()}else{E.removeClass("selected")}}else{if(C==40){if(E.length>0){var D=E.next("a");if(D.length>0){E.removeClass("selected");D.addClass("selected");G=D.text()}else{E.removeClass("selected");$(A).first().addClass("selected");G=$(A).first().text()}}else{$(A).first().addClass("selected");G=$(A).first().text()}}}if(G.trim().length>0){$("#i").val(G)}}function closeInputDropDown(){$("#imath").hide();$("#imath .ac,#imath .im").html("").hide();$("#input").removeClass("imath")}function hasFileInput(){return $("#input .inputfile-tag").length>0};