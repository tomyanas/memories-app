import Post from ".//Post/post.js";

import useStyles from "./styles";
const Posts = () => {
    const classes = useStyles();
    return (
        <>
        <h1>POSTS</h1>
        <Post/>
        <Post/>
        </>
    )
}

export default Posts;