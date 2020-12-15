document.getElementById('submitLogin').addEventListener('click', event => {
  event.preventDefault()
  let email = document.getElementById('exampleInputEmail1').value
  let password = document.getElementById('exampleInputPassword1').value
  axios.post('/api/login', {
    email, password
  })
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('userId', data.user.id)
      // window.location.replace('/budget.html')
    })
    .catch(err => {
      console.log(err)
    })
  // console.log(email)
  // console.log(password)
})
