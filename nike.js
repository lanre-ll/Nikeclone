const contactForm = document.getElementById('contact--form'),
	contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
	e.preventDefault()

	emailjs.sendForm('service_6xoes49','template_s0cw67l','#contact--form','3R4zm0czgp5SqXFAf')
	.then (() => {

		document.querySelector('.contact__message').style.display = 'block';

		contactMessage.textContent = "Thank you! We'll be in touch soon."

		setTimeout(() => {
			contactMessage.textContent = ''
		}, 10000)
		contactForm.remove()
	})
}

contactForm.addEventListener('submit', sendEmail);
