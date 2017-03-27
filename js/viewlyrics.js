
 $.getJSON('../data/viewlyrics.json', function(data){
    var html = "<ul id='result'>";
    $.each(data, function (key, val) {
    html += '<img src ="' + val.image_url + '" class="image-styles" width="180" height="180" />';
    html += '<p class="image-title" style="text-align:center">' + val.title + '</p>';
    html += '<p class="image-description" style="text-align:center">' + val.description + '</p>';
   });
   html += "</ul>";
   $('#viewlyrics').html(html);
    }); 





