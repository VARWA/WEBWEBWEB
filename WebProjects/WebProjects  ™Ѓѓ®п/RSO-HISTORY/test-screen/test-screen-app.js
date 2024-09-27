const container = document.getElementById('container')
var question = {
		date: 1959,
		content: 'Создание РСО'
	}

const firstColumn = [question]


var firstColumnList = []

for (var i=0; i < firstColumn.lenght; i++){
	firstColumnList.add(firstColumn[i])
}


function renderColumn(content) {
	container.innerHTML = "<div><p>" + content + "</p></div>"
}

renderColumn(container, firstColumn[0].date)