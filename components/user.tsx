interface UserProps {
	user: any
}

const User: React.FC<UserProps> = ({user}) => {
	return (
		<>
			<p>{user.name}</p>
			<p>{user.email}</p>
		</>
	)
}

export default User
