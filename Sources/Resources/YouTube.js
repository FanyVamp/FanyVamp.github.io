$(document).ready(function(){
    var apiKey = 'AIzaSyDCZrsqNfF0nvOmHCMrufvaDZk92b0UbtY';
    var channelId = 'UCQ3nubdTfWTLMKTTt9eja_A';
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
            $('lite-youtube').attr('videoid', videoId);
            $('lite-youtube').attr('video-title', videoTitle);
        }
    );
});