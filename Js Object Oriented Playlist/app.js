var playlist = new Playlist();

var song1 = new Song("One Mic", "Nas", "3:39");
var song2 = new Song("Jigga", "Jay-Z", "2:29");
var song3 = new Song("Next Girl", "Black Keys", "3:29");
var song4 = new Song("I feel Good", "James Brown", "4:31");
var song5 = new Song("Autum Blues", "Miles Davis", "5:21");

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(song4);
playlist.add(song5);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);
};

var nextButton = document.getElementById("next");
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
};

var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
};