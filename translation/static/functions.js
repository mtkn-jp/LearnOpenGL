function ClickVideo(video){
	if(video.children[0].paused)
		video.children[0].play();
	else
		video.children[0].pause();
}
