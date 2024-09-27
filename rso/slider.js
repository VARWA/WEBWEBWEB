const photos = document.querySelectorAll('.carousel-item');
let mainPhotoCurrentIndex = 0

showCurrentPhoto()

function showCurrentPhoto(){
	alert(photos[i].style)
	for (let i = 0; i < photos.lenght; i++){
		console.log(photos[i].style.display)
		if (i == mainPhotoCurrentIndex){
			photos[i].style.display = 'block'
		}
		else {
			photos[i].style.display = 'none'

		}
	}
}