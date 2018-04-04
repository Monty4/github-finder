const gitHubApi = {
    baseURL: 'https://api.github.com',

    call: function (path) {
        return new Promise((resolve, reject)=> {
            fetch(path)
                .then(res=> {
                    return res.json();
                })
                .then(data=> {
                    return resolve(data);
                })
                .catch((err)=> {
                    reject(err)
                })
        })
        .catch((err)=> {
            throw new Error (err)
        })
    },

    getUsers: function (query) {
        let path = `${this.baseURL}/users/${query}`

        return this.call(path).then(res => res)
    },

    getRepos: function (query) {
        let path = `${this.baseURL}/users/${query}/repos`

        return this.call(path).then(res => res)
    }
    
}