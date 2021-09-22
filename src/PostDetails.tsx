import {RouteComponentProps} from "react-router";
import {IPost} from "./models/IPost";
import React from "react";
import {Link} from "react-router-dom";
import './style.css';

const PostDetails = (props: RouteComponentProps<{}, {}, IPost>) => {

    // console.log(props);
    // console.log(props.location.state);

let {id, title, body, userId} = props.location.state;

    return <div className={"post"}>
        <h3><i>Id post:</i>  {id}</h3>
        <h3><i>Title post:</i> {title}</h3>
        <p><i>Text:</i>  {body}</p>
        <h5><i>User Id:</i>  {userId}</h5>

        <Link to={'/posts'}>return to posts</Link>
    </div>

}

export default PostDetails;


// import {Link} from "react-router-dom";
// import React, {FC} from "react";
// import {IPost} from "./models/IPost";
//
// const PostDetails: FC<IPost> = (props: IPost) => {
//
//     let {body, id, title, userId} = props;
//
//     return <div>
//         <h2>{id}{title}</h2>
//         <p>{body}</p>
//         <h5>{userId}</h5>
//
//         <Link to={'/posts'}>posts</Link>
//
//     </div>
// }
//
// export default PostDetails;
