function handleCardChange(e) {
	const id = e.target.id
	const cardField = document.querySelector(`#item_${id}`)
	let input = document.querySelector(`#${id}`)
	let value = e.target.value

	switch (id) {
		case 'card_number':
			if ((value.length > 0 && !Number(value)) || value.length > 16) {
				input.value = value.slice(0, value.length - 1)
				return
			}

			if (value.length === 0) {
				cardField.innerHTML = '#### #### #### ####'
				return
			}

			break
		case 'expDate':
			console.log('1')
			if ((value.length > 0 && !Number(value)) || value.length > 4) {
				input.value = value.slice(0, value.length - 1)
				return
			}

			if (value.length === 0) {
				cardField.innerHTML = 'mm/yy'
				return
			}

			break
		case 'card_holder_name':
			if (value.length > 18) {
				value = value.slice(0, 18) + '...'
			}

			if (value.length > 30) {
				input.value = value.slice(0, value.length - 1)
				return
			}

			if (value.length === 0) {
				cardField.innerHTML = 'Your Name'
				return
			}

			if (typeof value !== 'string') {
				input.value = value.slice(0, value.length - 1)
				return
			}

			break
		case 'card_cvv':
			if (value.length > 3) {
				input.value = value.slice(0, value.length - 1)
				return
			}

			if (value.length > 0 && !Number(value)) {
				input.value = value.slice(0, value.length - 1)
				return
			}

			break
	}

	cardField.innerHTML = value

	console.log(e, id)
}
