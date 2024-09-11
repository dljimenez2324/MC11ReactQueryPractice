// ---imports here---
import axios from "axios"
import { useEffect, useState } from "react"


// ---interface here---
interface Posts {
    id: number
    title: string
    body: string
}


const PostList = () => {

    // ---useStates here---
    const [posts, setPosts] = useState<Posts[]>([]);
    const [error, setError] = useState("");

    // ---helper functions here---
    const fetchData = () => {

        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => setPosts(response.data))
            .catch(error => setError(error));

    }

    // ---useEffect here---
    useEffect(() => {
      
        fetchData();
    
    }, [])
    

  return (
    <>
        <h2>List of Titles (With React)</h2>
        {posts.map((posts) => (
            <li key={posts.id}>{posts.title}</li>
        ))};
    </>
  )
}

export default PostList