$("button").click(function(){var e=$("select")[0].selectedIndex,t=$("select")[1].value,a=$("select")[2].value;$.ajax("api/getMarks.php",{type:"POST",data:"class="+e+"&discipline="+t+"&learner="+a,complete:function(e){var e=JSON.parse(e.responseText),t=$("tbody")[0];t.innerHTML="";for(var a in e){var n='<tr><td colspan="5"><input type="hidden" value="'+e[a].id+'"/> '+e[a].name+'</td><td class="mark" colspan="1">'+e[a].mark+"</td></tr>";$(n).appendTo($(t))}}})}),$("#submit").on("click",function(e){e.preventDefault();var t=new Object;$("tbody tr").each(function(e,a){t[e]=new Object,t[e].id=$(this).find("input").val(),t[e].mark=$(this).find("td")[1].innerHTML}),$.ajax("api/updateMarks.php",{type:"POST",data:"marks="+JSON.stringify(t),complete:function(e){console.log(e.responseText)}})});