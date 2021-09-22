import {useEffect, useState} from "react";
import {IPost} from "./models/IPost";
import {getPosts} from "./services/post.api";
import Post from "./Post";

const Posts = () => {

    let [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data));
    }, [])

    const style = {
        color: 'midnightblue',
    };

    return <div style={style}>
        {
            posts.map(value => <Post {...value} key={value.id}/> )
        }
    </div>
}

export default Posts;
