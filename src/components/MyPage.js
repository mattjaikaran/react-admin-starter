import React from 'react'
import { useAuthenticated } from 'react-admin'

const MyPage = () => {
	useAuthenticated() // redirects to login if not authenticated
	return (
    <div>My Page</div>
  )
}

export default MyPage
