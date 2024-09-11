// --- imports here ---
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


// ---interface here---
interface Posts {
    id: number
    title: string
    body: string
}


const PostListWQuery = () => {

    // helper function
    const fetchPosts = () => 

        axios
        .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.data)
        

    const {data: posts, error, isLoading} = useQuery<Posts[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })
    
        

  return (
    <>
        <h2>List of Titles (With ReactQuery)</h2>
        {isLoading ? <p>Loading ...</p> : null}
        {error ? <p>{error.message}</p> : null}
        {posts?.map((data) => (
            <li key={data.id}>{data.title}</li>
        ))}
    </>
  )
}

export default PostListWQuery