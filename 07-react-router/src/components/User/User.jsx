import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams();

  return (
    <div className="text-center p-5 bg-gray-600 text-white text-xl">User: {userid}</div>
  )
}

export default User