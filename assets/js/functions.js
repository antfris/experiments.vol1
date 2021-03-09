// handle login
var email = localStorage.getItem('email');

if (!email) {
	window.location.replace("login.html");
	//return;
} else {
	document.getElementById('all-content').style.display = "block";
}

document.getElementById('login-details').innerHTML = 'logged in as ' + email;

// create the playlist
/*
	find: 		(^[sound/0-9].*mp3{1})
	replace: 	{url: "sound/$1", promo: true},
*/
var raw_songs = [
	{url: "sound/01 chordy accordian.mp3", promo: true},
	{url: "sound/02 plucky star drops.mp3", promo: true},
	{url: "sound/03 plucky dual arp.mp3", promo: true},
	{url: "sound/04 panning square bass lfolfo.mp3", promo: true},
	{url: "sound/05 jammy 80s beat.mp3", promo: true},
	{url: "sound/06 techno jam.mp3", promo: true},
	{url: "sound/07 butterfly repetition.mp3", promo: true},
	{url: "sound/08 butterfly repetition - directors cut.mp3", promo: true},
	{url: "sound/09 lfo verb drone.mp3", promo: true},
	{url: "sound/10 plucky delay grove.mp3", promo: true},
	{url: "sound/11 arp plucky square mono.mp3", promo: true},
	{url: "sound/12 morph arp octave.mp3", promo: true},
	{url: "sound/13 plucky vibrato square.mp3", promo: true},
	{url: "sound/14 morph octave record.mp3", promo: true},
	{url: "sound/15 lfo gate plucky square.mp3", promo: true},
	{url: "sound/16 plucky arp morph oct.mp3", promo: true},
	{url: "sound/17 bouncing pluck square.mp3", promo: true},
	{url: "sound/18 amplitude modulation on triangle.mp3", promo: true},
	{url: "sound/19 talking indian roybvig.mp3", promo: true},
	{url: "sound/20 clicky morph eirie.mp3", promo: true},
	{url: "sound/21 strobe club beat.mp3", promo: true},
	{url: "sound/22 kane gate chop filter.mp3", promo: true},
	{url: "sound/23 kane poltergeist.mp3", promo: true},
	{url: "sound/24 kane android.mp3", promo: true},
	{url: "sound/25 coast kick didj.mp3", promo: true},
	{url: "sound/26 coast click didj mod.mp3", promo: true},
	{url: "sound/27 coast arp plucky delay.mp3", promo: true},
	{url: "sound/28 classic east coast vibrato.mp3", promo: true},
	{url: "sound/29 coast sync bass.mp3", promo: true},
	{url: "sound/30 telharmonic waiting for something.mp3", promo: true},
	{url: "sound/31 telharm cork out.mp3", promo: true},
	{url: "sound/32 telharm carib chord droplets.mp3", promo: true},
	{url: "sound/33 telh chord prog from degree.mp3", promo: true},
	{url: "sound/34 coast to coast delay.mp3", promo: true},
	{url: "sound/35 classic wobble bass.mp3", promo: true},
	{url: "sound/36 arp chord majmin.mp3", promo: true},
	{url: "sound/37 telh drum.mp3", promo: true},
	{url: "sound/38 woggle mayhem.mp3", promo: true},
	{url: "sound/39 rainish pattern ambient.mp3", promo: true},
	{url: "sound/40 variable arpegio length.mp3", promo: true},
	{url: "sound/41 bouncy random atten mod.mp3", promo: true},
	{url: "sound/42 fluttery arp verb.mp3", promo: true},
	{url: "sound/43 beat through coast slope.mp3", promo: true},
	{url: "sound/44 beat through coast linfm.mp3", promo: true},
	{url: "sound/45 beat through coast 1voct.mp3", promo: true},
	{url: "sound/46 krell atonal random.mp3", promo: true},
	{url: "sound/47 krells woggle mayhem.mp3", promo: true},
	{url: "sound/48 dopler phase shift.mp3", promo: true},
	{url: "sound/49 subharm didj.mp3", promo: true},
	{url: "sound/50 out the town.mp3", promo: true},
	{url: "sound/51 morse code.mp3", promo: true},
	{url: "sound/52 bloopy bing bang.mp3", promo: true},
	{url: "sound/53 quasi random gate pattern.mp3", promo: true},
	{url: "sound/54 coast noise snare.mp3", promo: true},
	{url: "sound/55 snarelody karplus-strong.mp3", promo: true},
	{url: "sound/56 dual env tempo div.mp3", promo: true},
	{url: "sound/57 gulp chior.mp3", promo: true},
	{url: "sound/58 jumping bubble and multiply.mp3", promo: true},
	{url: "sound/59 mission tension with space.mp3", promo: true},
	{url: "sound/60 subharm coast feat telh.mp3", promo: true},
	{url: "sound/61 corky monster.mp3", promo: true},
	{url: "sound/62 pulsar synthesis.mp3", promo: true},
	{url: "sound/63 glisson synthesis down.mp3", promo: true},
	{url: "sound/64 glisson synthesis updown.mp3", promo: true},
	{url: "sound/65 trainlet synthesis.mp3", promo: true},
	{url: "sound/66 trainlet pulsar glisson microjam sound.mp3", promo: true},
	{url: "sound/67 trainlet pulsar glisson automated jam.mp3", promo: true},
	{url: "sound/68 gate held delay.mp3", promo: true}
]

for (var index in raw_songs) {
	raw_songs[index].name = raw_songs[index].url.split('/')[1]
	raw_songs[index].artist = "Ancient Android"
	raw_songs[index].album = "experiments.vol1"
	raw_songs[index].cover_art_url = "assets/images/cover.jpg"

}

var songs = raw_songs

var container = document.getElementById('amplitude-right')

for (var index in songs) {
    var newElement = document.createElement('div');
    newElement.id = 'id' + index;
	newElement.className = "song amplitude-song-container amplitude-play-pause";
	newElement.setAttribute('data-amplitude-song-index', index);
    newElement.innerHTML = `
		<div class="song-now-playing-icon-container">
			<div class="play-button-container">

			</div>
			<img class="now-playing" src="assets/img/now-playing.svg"/>
		</div>
		<div class="song-meta-data">
			<span class="song-title">${songs[index].name}</span>
			<!--<span class="song-artist">${songs[index].artist}</span>-->
		</div>
		<!--<span class="song-duration">${songs[index].duration}</span>-->
	`

	//songs[index].name;
    container.appendChild(newElement);
}

/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}

let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#000';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		//this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}
		//this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#222';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#999';
		//this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		//this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

// scroll down button
document.getElementById("scrollButton").addEventListener('click', scrollToPlayer)
function scrollToPlayer(e) {
  e.preventDefault();
  const offsetTop = document.getElementById("blue-playlist-container").offsetTop;
  scroll({
    top: offsetTop - 150,
    behavior: "smooth"
  });
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	continue_next: true,
	callbacks: {
		song_change: function(){
			console.log(email);
			console.log('song change');
			var url = "https://antfris.org/268274/experiments.vol1/sound"
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (this.readyState != 4) return;
				if (this.status == 200) {
					var data = JSON.parse(this.responseText);
					console.log(data);
				}
			};
			xhr.open("POST", url, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify({email: email, song: songs[Amplitude.getActiveIndex()].name}));
		}
	},
	songs: songs
});
