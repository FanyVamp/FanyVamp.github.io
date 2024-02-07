const folderUrl = 'https://api.github.com/repos/fanyvamp/fanyvamp.github.io/contents/Sources/Fanart';

$.get(folderUrl).done(data => $('#imageContainer').append(data.reverse().filter(item => item.type === 'file').map(item => {
    const isGif = item.name.endsWith('.webm');

    const $imageContainer = $('<div>', { class: 'FanArt col-sm-6 col-md-4 col-lg-3' });
    const $card = $('<div>', { class: 'card mb-4' });

    let altText = item.name.replace(/-0+/, ' '); 
    altText = altText.replace(/(\.webp|\.webm)$/, '');

    if (isGif) {
        const $video = $('<video>', { class: `card-img-top img-fluid`, src: item.download_url, alt: altText }).prop({ autoplay: true, loop: true, muted: true });
        $card.append($video);
    } else {
        const $image = $('<img>', { src: item.download_url, class: `card-img-top img-fluid`, alt: altText });
        $card.append($image);
    }
    $imageContainer.append($card);

    return $imageContainer;
})));

$(document).ready(function() {

  const sr = ScrollReveal();

  $('.FanArt').each(function () {
    sr.reveal(this, {
        duration: 3000,
        origin: 'top',
        distance: '-20px',
        delay: 200,
        easing: 'ease-in-out',
    });
  });

  $('#imageContainer').on('click', '.card img, .card video', function(){
    var src = $(this).attr('src');
    var Video = src.toLowerCase().endsWith('.webm');

    if (!Video) {
      var modal = '<img src="' + src + '" class="img-fluid rounded-bottom" alt="FanArts">';
      $('.modal .modal-body').html(modal);
    } else {
      var modal = '<video src="' + src + '" class="img-fluid rounded-bottom" alt="FanArts" autoplay loop muted></video>';
      $('.modal .modal-body').html(modal);
    }
    $('.modal').modal('show');
  });

  $(".Copy, .right").on("click", function() {
    var fileName = $("#myModal .img-fluid").attr("src").split("/").pop();
    if (fileName.endsWith(".webp")) {
      fileName = fileName.replace(".webp", ".png");
    } else {
      fileName = fileName.replace(".webm", ".gif");
    }
    var imageUrl = 'https://raw.githubusercontent.com/FanyVamp/FanyVamp.github.io/main/Sources/Fanarts/' + fileName;

    if ($(this).hasClass("Copy")) {
      copyImageToClipboard(imageUrl);
    } else {
      downloadImage(imageUrl, fileName);
    }
  });

  function copyImageToClipboard(imageUrl) {
    $.get({
      url: imageUrl,
      xhrFields: { responseType: 'blob' },
      success: function(blob) {
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        img.onload = function() {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(function(newBlob) {
            const item = new ClipboardItem({ 'image/png': newBlob });
            navigator.clipboard.write([item])
          }, 'image/png');
        };
      }
    });
  }

  function downloadImage(imageUrl, fileName) {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
  }
});