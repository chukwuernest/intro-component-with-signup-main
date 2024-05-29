document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault() // Prevent form submission

    // Get form values
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()

    // Clear previous error messages
    clearErrors()

    let hasError = false

    // Validate first name
    if (!firstName) {
      showError('firstNameError', 'First Name is required.')
      hasError = true
    }

    // Validate last name
    if (!lastName) {
      showError('lastNameError', 'Last Name is required.')
      hasError = true
    }

    // Validate email
    if (!email) {
      showError('emailError', 'Email is required.')
      hasError = true
    } else if (!validateEmail(email)) {
      showError('emailError', 'Please enter a valid email address.')
      hasError = true
    }

    // Validate password
    if (!password) {
      showError('passwordError', 'Password is required.')
      hasError = true
    }

    // If no errors, proceed with form submission or desired action
    if (!hasError) {
      alert('Form submitted successfully!')
      form.reset() // Optionally reset the form
    }
  })

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId)
    errorElement.textContent = message
    errorElement.style.display = 'block'
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll('.error')
    errorElements.forEach((element) => {
      element.textContent = ''
      element.style.display = 'none'
    })
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
})
