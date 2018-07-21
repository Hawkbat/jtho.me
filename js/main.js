
var videoTags = document.getElementsByTagName('video')
for (var i = 0; i < videoTags.length; i++) {
	videoTags[i].addEventListener('click', function (e) {
		if (this.paused) this.play()
		else this.pause()
	})
}

var audioTags = document.getElementsByTagName('audio')
for (var i = 0; i < audioTags.length; i++) {
	audioTags[i].addEventListener('play', function (e) {
		for (var j = 0; j < audioTags.length; j++) {
			if (audioTags[j] != e.target) audioTags[j].pause()
		}
	})
}

var overlay = document.getElementById('overlay')
if (overlay) {
	overlay.addEventListener('click', function (e) {
		document.body.classList.remove('overlay')
	})

	var thumbs = document.querySelectorAll('.thumbs article img')

	for (var i = 0; i < thumbs.length; i++) {
		thumbs[i].addEventListener('click', function (e) {
			document.body.classList.add('overlay')
			overlay.children[0].src = this.src.replace('thumb/', 'fullres/')
		})
	}

	var carousels = document.querySelectorAll('.carousel')
	for (var i = 0; i < carousels.length; i++) {
		(function (i) {
			let index = 0
			var img = carousels[i].querySelector('img')
			var left = carousels[i].querySelector('.left')
			var right = carousels[i].querySelector('.right')
			var sources = carousels[i].querySelectorAll('.sources img')

			img.addEventListener('click', function (e) {
				document.body.classList.add('overlay')
				overlay.children[0].src = img.src
			})

			left.addEventListener('click', function (e) {
				index = (index + sources.length - 1) % sources.length
				img.src = sources[index].src
			})

			right.addEventListener('click', function (e) {
				index = (index + 1) % sources.length
				img.src = sources[index].src
			})
		})(i)
	}
}