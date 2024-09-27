const leftTimetable  = document.getElementById('left--timetable--list')
const timeNow = document.getElementById('time--now')

class Event {
	constructor(name='Событие', timeStart=''){
		this.name = name
		this.timeStart = timeStart
	}
}


let events = [new Event('Построение', '11:00'), new Event('Перекличка', '11:20'), new Event('Обед', '14:00')]



function render() {
	leftTimetable.innerHTML = events.map((event) => addHTML(event))
}

render()

function addHTML(event) {
	return `<p>${event.name}</p>
	<p>${event.timeStart}</p>`
}

setInterval(
	setTime, 1000)

function setTime(){
	dateNow = new Date()
	hours = dateNow.getHours()
	minutes = dateNow.getMinutes()
	seconds = dateNow.getSeconds()

	timeNow.innerHTML =  hours + ':' + minutes + ':' + seconds
}

