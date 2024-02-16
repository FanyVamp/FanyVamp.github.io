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
      parent: ["fanyvamp.github.io"],
      muted: true
    });

    var carousel = document.getElementById('carouselExampleControls');
    carousel.addEventListener('slide.bs.carousel', function (event) {
      var activeItem = event.relatedTarget;
      var activeIndex = $(activeItem).index() + 1;

      if (activeIndex === 1) {
        twitchFany.play();
        twitchFanyArt.setMuted(true);
      } else if (activeIndex === 2) {
        twitchFany.setMuted(true);
        twitchFanyArt.play();
        twitchFanyArt.setMuted(false);
      }
    });
  });