import {IPost} from "./models/IPost";
import React, {FC, MouseEvent} from "react";
import {Link} from "react-router-dom";
import './style.css';

const Post: FC<IPost> = (props: IPost) => {

    // console.log(props);

    let {id, title, body, userId} = props;
    
    // const history = useHistory();

    // let onClick = (e: MouseEvent<HTMLButtonElement>): void => {
    //     history.push(`/posts${id}`, props);
    // };

    return <div className={'post'}>
        <h3><i>Id post: </i>   {id}</h3>
        <h3><i>Title post: </i>   {title}</h3>
        {/*<p><i>Text:</i>  {body}</p>*/}
        {/*<h5><i>User Id:</i>  {userId}</h5>*/}
        {/*<button onClick={onClick}>details</button>*/}

        <Link to={{pathname: `/posts${id}`, state: props}}>details</Link>
    </div>

}

export default Post;


