import axios from "axios"
import { useEffect, useState } from "react"

const Api = () => {

    const [posts, setPosts] = useState([])

    let URL = "https://jsonplaceholder.typicode.com/posts"
    const postdataValue = {
        "userId": 101,
        "id": 101,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }


    // This is for get a data from somewhere (Api)
    const getposts = async () => {
        try {
            const response = await axios.get(URL)
            setPosts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    // This is for Post a data to somewhere (database)
    const postPosts = async () => {
        try {
             await axios.post(URL, postdataValue)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getposts()
    }, [])

    return (
        <>
            <div className="">
                <h1 className="font-bold text-3xl mb-5">List Items</h1>
                <ul>
                    {

                        posts && posts.map((item, idx) => (
                            <li key={idx} className="border border-gray-600 mb-1">{item.id} {item.title}</li>
                        ))
                    }
                </ul>
                <button onClick={postPosts}>Post Data</button>
            </div>
        </>
    )
}

export default Api