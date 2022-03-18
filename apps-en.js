const name = document.getElementById('name')
const occupation = document.getElementById('occupation')
const datetime = document.getElementById('datetime')
const office = document.getElementById('office')
const municipality = document.getElementById('municipality')
const feedback = document.getElementById('feedback')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
	let messages = []
	if (name.value == '' || name.value == null) {
		messages.push('Name is required')
	}
	if ()
	if (messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
})