import { useState, useEffect } from "react"

interface DashboardProps {}

interface DashboardData {
  posts: number
  likes: number
  followers: number
  following: number
}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardData>({} as DashboardData)

  const fetchDashboardData = async () => {
    const response = await fetch("http://localhost:4000/dashboard")
    const data = await response.json()
    setDashboardData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])
  
  if (isLoading) return <h2>Loading...</h2>

	return (
    <>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </>
  )
}

export default Dashboard
