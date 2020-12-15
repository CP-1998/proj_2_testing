axios.get('/api/budget')
  .then(({ data: budget }) => {
    console.log(budget)
    budget.forEach(budget => {
      let budgetElem = document.createElement('div')
      budgetElem.innerHTML = 
        <p>${budget.date}</p>
        <p>${budget.description}</p>
        <p>${budget.expenseType}</p>
        <p>${budget.value}</p>

      document.getElementById('budget').append(budgetElem)
    })
  })
  .catch(err => console.log(err))