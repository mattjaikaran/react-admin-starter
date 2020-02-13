export default {
  login: ({ username }) => {
    localStorage.setItem('username', username)
    return Promise.resolve()
  },
  // login : ({ username, password }) => {
  //   const request = new Request('https://mydomain.com/authenticate', {
  //     method: 'POST',
  //     body: JSON.stringify({ username, password }),
  //     headers: new Headers({'Content-Type': 'application/json'})
  //   })
  //   return fetch(request).then(response => {
  //     if (response.status < 200 || response.status >= 300) {
  //       throw new Error(response.statusText)
  //     }
  //     return response.json()
  //   }).then(({ token }) => {
  //     localStorage.setItem('token', token)
  //   })
  // },
  logout: () => {
    localStorage.removeItem('username')
    return Promise.resolve()
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  checkAuth: () => {
    return localStorage.getItem('username')
    ? Promise.resolve()
    : Promise.reject()
  },
  getPermissions: () => {
    const role = localStorage.getItem('permissions')
    return role ? Promise.resolve(role) : Promise.reject()
  }
}
