import React, { useState } from 'react'
import { useLogin, useNotify } from 'react-admin'
import { ThemeProvider } from '@material-ui/styles'

const Login = ({ theme }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin()
  const notify = useNotify()
  const submit = (e) => {
    e.preventDefault()
    try {
      login({ email, password })
    } catch (err) {
      notify('Invalid email or password')
      console.error(err.message)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={submit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
      </form>
    </ThemeProvider>
  )
}

export default Login
