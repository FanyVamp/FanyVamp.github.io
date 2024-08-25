$(document).ready(function(){

    var apiKey = 'AIzaSyDCZrsqNfF0nvOmHCMrufvaDZk92b0UbtY';
    // Reemplaza con el ID del canal
    var channelId = 'UCQ3nubdTfWTLMKTTt9eja_A';
    var videoTitle
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part: 'snippet',
            channelId: channelId,
            maxResults: 1,
            order: 'date',
            type: 'video',
            key: apiKey
        },
        function(data) {
            var videoId = data.items[0].id.videoId;
            var videoTitle = data.items[0].snippet.title;

            // Accede al elemento lite-youtube y actualiza las propiedades directamente
            var liteYoutubeElement = document.querySelector('lite-youtube');
            liteYoutubeElement.videoId = videoId;
            liteYoutubeElement.videoTitle = videoTitle;
        }
    );
    $('lite-youtube').attr('videotitle', videoTitle);

});