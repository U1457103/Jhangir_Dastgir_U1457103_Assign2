
$('#searchsingers').keyup(function() {
 var searchTerm = $(this).val(); 
 var myExp = new RegExp(searchTerm, "i"); 

 $.getJSON('/data/lyrics.json', function(data){

  var output = "<ul id='result'>";
  $.each(data, function(key, val){
   if(val.title.search(myExp) != -1){
    output += '<li>';
    output += '<a class="tab-item" href="../html/lyrics.html" data-ignore="push">' + val.title + '</a>';
    output += '</li>';
   }
  });//end each
  output += "</ul>";
  $('#updatesingers').html(output);
 });
});
