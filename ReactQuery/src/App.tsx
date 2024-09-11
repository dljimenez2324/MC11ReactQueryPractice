import PostList from "./assets/components/PostList"
import PostListWQuery from "./assets/components/PostListWQuery"
import PostListWQueryHook from "./assets/components/PostListWQueryHook"


const App = () => {
  return (
    <>
        <h1>Mini Challenge 11 React, ReactQuery, ReactQuery W/CustomHook</h1>

        {/* ---- Post List React (regular) ---- */}
            {/* <PostList/> */}

        {/* ---- Post List ReactQuery ---- */}
            {/* <PostListWQuery/> */}

        {/* ---- Post List ReactQuery w/customhook ---- */}
            <PostListWQueryHook/>
    </>
  )
}

export default App