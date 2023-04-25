import User from "../../components/user"

interface UserListProps {
	users: any
}

const UserList: React.FC<UserListProps> = ({users}) => {
	return (
		<>
			<h1>List of Users</h1>
			{users.map((user: any, index: number) => (
				<div key={user.id}>
					<User user={user} />
				</div>
			))}
		</>
	)
}

export default UserList

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users")
	const data = await response.json()

	return {
		props: {
			users: data,
		},
	}
}
