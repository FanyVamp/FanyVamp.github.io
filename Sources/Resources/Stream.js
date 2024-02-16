
$(document).ready(function() {
            
    var twitchFany = new Twitch.Embed("twitch-embed-Fany", {
      width: 854,
      height: 480,
      channel: "fanyvamp",
      parent: ["fanyvamp.github.io"]
    });

    var twitchFanyArt = new Twitch.Embed("twitch-embed-FanyArt", {
      width: 854,
      height: 480,
      channel: "fanyvampart",
      parent: ["fanyvamp.github.io"]
    });

    $('#carouselExampleControls').on('slid.bs.carousel', function (e) {
      var index = $('.carousel-inner .carousel-item.active').index();
      twitchFany.pause();
      twitchFanyArt.pause();
      if (index === 0) {
        twitchFany.play();
      } else if (index === 1) {
        twitchFanyArt.play();
      }
    });
  });