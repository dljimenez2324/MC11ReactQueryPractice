// import custom hook
import usePosts from "../../hooks/usePosts"


const PostListWQueryHook = () => {

    // destructure our custom hook
    const {data: posts, error, isLoading} = usePosts();

  return (
    <>
        <h2>List of Titles (With ReactQueryCustomHook)</h2>
        {isLoading ? <p>Loading...</p> : null}
        {error ? <p>{error.message}: </p> : null}
        {posts?.map((data) => (
            <li key={data.id}>{data.title}</li>
        ))}
    </>
  )
}

export default PostListWQueryHook