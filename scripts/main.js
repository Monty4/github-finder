//Selecting nodes from the DOM 

const form = document.querySelector('form')
const input = document.getElementsByName('search')

//Adding an event listener (submit) to the selected node

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const { value } = input[0]

    gitHubApi.getUsers(value)
        .then((res) => {
            res.message === 'Not Found' ? printNoResults() : printUser(res)
        })
        .catch(err => console.log(err))


    gitHubApi.getRepos(value)
        .then(data => {
            console.log(data)
            data.message === 'Not Found' ? printNoResults() : printRepos(data)
        })
        .catch(err => console.log(err))
})