const startBtn = document.getElementById("btn_start")
const stopBtn = document.getElementById("btn_stop")

document.addEventListener('DOMContentLoaded', () => {

	startBtn.addEventListener('click', () => {
		startBtn.style.background = '#aaa'
		startBtn.disabled = true

		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

			chrome.tabs.sendMessage(tabs[0].id, { action: "request_recording" }, function (response) {
				if (!chrome.runtime.lastError) {
					console.log(response)
				} else {
					console.log(chrome.runtime.lastError, "error line 14")
				}
			})
		})

	})

	stopBtn.addEventListener('click', () => {
		startBtn.disabled = false
		startBtn.style.background = 'teal'

		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

			chrome.tabs.sendMessage(tabs[0].id, { action: "stop_recording" }, function (response) {
				if (!chrome.runtime.lastError) {
					console.log(response)
				} else {
					console.log(chrome.runtime.lastError, "error line 34")
				}
			})
		})

	})
})

