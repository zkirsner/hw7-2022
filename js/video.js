var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop = false
	video.autoplay = false
})

function playVid() {
	video.play()
	console.log("Play Video")
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
}
document.querySelector("#play").addEventListener("click", playVid)

function pauseVid() {
	video.pause()
	console.log("Pause Video")
}
document.querySelector("#pause").addEventListener("click", pauseVid)

function slowerVid() {
	video.playbackRate *= 0.9
	console.log(video.playbackRate)
}
document.querySelector("#slower").addEventListener("click", slowerVid)

function fasterVid() {
	video.playbackRate /= 0.9
	console.log(video.playbackRate)
}
document.querySelector("#faster").addEventListener("click", fasterVid)

function skipVid() {
	video.currentTime = video.currentTime + 10
	console.log(video.currentTime)
}
document.querySelector("#skip").addEventListener("click", skipVid)

var btn = document.querySelector("#mute")
function muteVideo() {
	if (video.muted == false) {
		video.muted = true
		btn.innerHTML = "Unmute"
	}
	else {
		video.muted = false
		btn.innerHTML = "Mute"
	}
}
document.querySelector("#mute").addEventListener("click", muteVideo)

slider = document.getElementById("slider")
function volumeSlider() {
	video.volume = slider.value/100
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
}
document.querySelector("#slider").addEventListener("click", volumeSlider)

function oldSchool() {
	video.classList.add("oldSchool")
}
document.querySelector("#vintage").addEventListener("click", oldSchool)

function originalStyle() {
	video.classList.remove("oldSchool")
}
document.querySelector("#orig").addEventListener("click", originalStyle)