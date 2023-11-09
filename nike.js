const contactForm = document.getElementById('contact--form')

const sendEmail = (e) => {
	e.preventDefault()

	emailjs.sendForm('service_6xoes49','template_s0cw67l','#contact--form','3R4zm0czgp5SqXFAf')
	.then (() => {
		contactForm.reset()
	})
}

contactForm.addEventListener('submit', sendEmail);
