import {useState} from "react"
import {useRouter} from "next/router"

interface EventListProps {
	events: any
}

const EventList: React.FC<EventListProps> = ({events}) => {
	const [eventList, setEventList] = useState(events)
	const router = useRouter()

	const fetchSportsEvents = async () => {
		const response = await fetch(
			"http://localhost:4000/events?category=sports",
		)
		const data = await response.json()
		setEventList(data)
		router.push("/events?category=sports", undefined, {shallow: true})
	}

	return (
		<>
			<button onClick={fetchSportsEvents}>Sports Events</button>
			<h1>List of Events</h1>
			{eventList.map((event: any) => (
				<div key={event.id}>
					<h2>
						{event.id} {event.title} {event.date} | {event.category}
					</h2>
					<p>{event.description}</p>
					<hr />
				</div>
			))}
		</>
	)
}

export default EventList

export async function getServerSideProps(context: any) {
	const {category} = context.query
	const queryString = category ? "category=sports" : ""
	const response = await fetch(`http://localhost:4000/events?${queryString}`)
	const data = await response.json()

	return {
		props: {
			events: data,
		},
	}
}
