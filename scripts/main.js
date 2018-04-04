const form = document.querySelector('form')
const input = document.getElementsByName('search')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const { value } = input[0]

    gitHubApi.getUsers(value)
        .then((res) => {
            console.log(res)
            printUser(res)
        })
        .catch(err => console.log(err))
        .then(() => {
            gitHubApi.getRepos(value)
                .then(data => {
                    console.log(data)
                    printRepos(data)
                } 
            )
        })
        .catch(err => console.log(err))    
})



printUser = (user) => {
    let userData = document.getElementsByClassName('user-data')

    const bio = user.bio ? user.bio : 'This user did not provide any bio'
    
    userData[0].innerHTML =  `<img src=${user.avatar_url} alt="user-picture">
                            <div class="user-info">
                                <span>
                                    @${user.login}
                                </span>
                                <h1>
                                    ${user.name}
                                </h1>
                                <p>
                                    ${bio}
                                </p>
                            </div>`
}

printRepos = (repos) => {
    let reposList = document.getElementsByClassName('repos-list')
    
    reposList[0].innerHTML = repos.map(repo=> {
        return `<li>${repo.name}</li>`
    }).join('')
}