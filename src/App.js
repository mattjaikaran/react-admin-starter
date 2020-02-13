import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { UserList } from './components/Users'
import { PostList, PostEdit, PostCreate } from './components/Posts'
import authProvider from './authProvider'
import Dashboard from './components/Dashboard'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
// import dataProvider from './dataProvider'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}>
    {/*
      {permissions => [
        // Restrict access to the edit and remove views to admin only
        <Resource
          name="customers"
          list={VisitorList}
          edit={permissions === 'admin' ? VisitorEdit : null}
          icon={VisitorIcon} />,
        // Only include the categories resource for admin users
        permissions === 'admin'
        ? (
          <Resource
            name="categories"
            list={CategoryList}
            edit={CategoryEdit}
            icon={CategoryIcon} />
        ) : null
      ]}
    */}
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)

export default App
