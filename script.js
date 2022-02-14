// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player1', {
    height: '360',
    width: '640',
    videoId: '1Q8fG0TtVAY',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player = new YT.Player('player2', {
    height: '360',
    width: '640',
    videoId: 'JfVOs4VSpmA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player = new YT.Player('player3', {
    height: '360',
    width: '640',
    videoId: 'rsQEor4y2hg',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player = new YT.Player('player4', {
    height: '360',
    width: '640',
    videoId: 'vM-Bja2Gy04',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player = new YT.Player('player5', {
    height: '360',
    width: '640',
    videoId: 'aWzlQ2N6qqg',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

$(document).ready(function(){
  $("#tabs li a span")[0].append(`WONDER WOMAN - Official Trailer [HD]`)
  $("#tabs li a span")[1].append(`SPIDER-MAN: NO WAY HOME - Official Trailer (HD)`)
  $("#tabs li a span")[2].append(`BATMAN - Trailer Principal`)
  $("#tabs li a span")[3].append(`Zack Snyder's Justice League | Official Trailer | HBO Max`)
  $("#tabs li a span")[4].append(`Marvel Studios' Doctor Strange in the Multiverse of Madness | Official Trailer`)
  $( "#tabs" ).tabs();
  $( ".accordion" ).accordion({
    heightStyle: "content"
  });
})