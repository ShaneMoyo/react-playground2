export default { 
    getGistByUsername(username) { 
        const url = `https://api.github.com/users/${username}/gists`
        return fetch(url)
            .then(res => {
                if (res.status !== 200) throw new Error(['Server error.']);
                return res.json();
            });
    },
    getGistDetail(id) {
        const url = `https://api.github.com/gists/${id}`
        return fetch(url)
          .then(res => {
            if (res.status !== 200) throw new Error(['Server error.']);
            
            return res.json();
          })
      }

}