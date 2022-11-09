var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop = false
	video.autoplay = false
})

function playVid() {
	video.play()
	console.log("Play Video")
}
document.querySelector("#play").addEventListener("click", playVid)

function pauseVid() {
	video.pause()
	console.log("Pause Video")
}
document.querySelector("#pause").addEventListener("click", pauseVid)

// ask about how to get it to loop and decrement by 10%
function slowerVid() {
	video.playbackRate = 0.9
	console.log(video.playbackRate)
	// for (var i = 0; i < 0.9; i--) {
	// 	video.playbackRate -= video.playbackRate - (video.playbackRate * 0.1)
		
	// } 
}
document.querySelector("#slower").addEventListener("click", slowerVid)

function fasterVid() {
	video.playbackRate = 1.1
	console.log(video.playbackRate)
}
document.querySelector("#faster").addEventListener("click", fasterVid)

function skipVid() {
	video.currentTime = video.currentTime + 10
	console.log(video.currentTime)
}
document.querySelector("#skip").addEventListener("click", skipVid)

// ask how to change button text
var btn = document.querySelector("#mute")
function muteVideo() {
	if (video.muted === false) {
		video.muted = true
		btn.textContent = "Mute"
	}
	else {
		video.muted = false
		btn.textContent = "Mute"
	}
}
document.querySelector("#mute").addEventListener("click", muteVideo)

function volumeSlider () {
	console.log("Volume adjusted")
}
document.querySelector("#slider").addEventListener("click", volumeSlider)


