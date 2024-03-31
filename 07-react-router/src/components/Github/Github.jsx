// import { useState } from "react"
// import { useEffect } from "react"
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/akhileshp19')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // }, [])

  return (
    <>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}</div>
        <img src={data.avatar_url} alt="Github profile pic" width={300} className="mx-auto block m-4"/>   
    </>
  )
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/akhileshp19')
    return response.json();
}