import React from 'react'
import {
  List, Datagrid, TextField, EmailField, UrlField, Create, SimpleForm, TextInput, required, Edit, TabbedForm, FormTab, Filter
} from 'react-admin'

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <UrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
)

export const UserCreate = ({ permissions, ...props }) => (
	<Create {...props}>
		<SimpleForm defaultValue={{ role: 'user' }}>
			<TextInput source="name" validate={[required()]} />
			{permissions === 'admin' && (
				<TextInput source="role" validate={[required()]} />
			)}
		</SimpleForm>
	</Create>
)

// export const UserEdit = ({ permissions, ...props }) => (
// 	<Edit title={<UserTitle />} {...props}>
// 		<TabbedForm defaultValue={{ role: 'user' }}>
// 			<FormTab label="user.form.summary">
// 				{permissions === 'admin' && <TextInput disabled source="id" />}
// 				<TextInput source="name" validate={required()} />
// 			</FormTab>
// 			{permissions === 'admin' && (
// 				<FormTab label="user.form.security">
// 					<TextInput source="role" validate={required()} />
// 				</FormTab>
// 			)}
// 		</TabbedForm>
// 	</Edit>
// )

const UserFilter = ({ permissions, ...props }) => (
	<Filter {...props}>
		<TextInput label="user.list.search" source="q" alwaysOn />
		<TextInput source="name" />
		{permissions === 'admin' && <TextInput source="role" />}
	</Filter>
)

// export const UserList = ({ permissions, ...props }) => (
// 	<List
//     {...props}
// 		filters={props => <UserFilter permissions={permissions} {...props} />}>
// 		<Datagrid>
// 			<TextField source="id" />
// 			<TextField source="name" />
// 			{permissions === 'admin' && <TextField source="role" />}
// 			{permissions === 'admin' && <EditButton />}
// 			<ShowButton />
// 		</Datagrid>
// 	</List>
// )
