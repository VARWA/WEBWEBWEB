const goBackBtn = document.getElementById('goBack')
const sendFeedback = document.getElementById('feedbackBtn')


goBackBtn.onclick = function ()  {
	window.scrollTo(0, 0);
}

sendFeedback.onclick = function () {
	const feedbackName = document.getElementById('feedbackName').value
	const feedbackEmail = document.getElementById('feedbackEmail').value
	const feedbackTheme = document.getElementById('feedbackTheme').value
	const feedbackText = document.getElementById('feedbackText').value
	alert(feedbackName)
}