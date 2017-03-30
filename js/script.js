 $.getJSON('../data/lyrics.json', function(data){
    var html = "<ul id='result'>";
      $.each(data, function (key, val) {
      html += '<img src ="' + val.image_url + '" class="image-styles" width="64" height="64" />';
      html += '<p class="image-title">' + val.title + '</p>';
      html += '<a class="tab-item" href="../html/viewlyrics.html" data-ignore="push">' + val.url + '</a>';
      html += '<p class="image-description">' + val.description + '</p>';
      });
      html += "</ul>";
      $('#lyrics').html(html);

    }); 