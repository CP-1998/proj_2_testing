document.getElementById('submitBtn').addEventListener('click', event => {
  event.preventDefault()
  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let email = document.getElementById('email').value
  let password = document.getElementById('exampleInputPassword1').value
  let budget = 0
  console.log(firstName, lastName, email, password)
  axios.post("/api/users", { firstName, lastName, email, password, budget })
    .then(data => {
      console.log(data)
      window.location.replace('/')
    })
    .catch(err => {
      console.log(err)
    })
})
