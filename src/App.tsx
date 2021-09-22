import React from 'react';
import './App.css';
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import {
    BrowserRouter as Router,
    Link, Route, RouteComponentProps, Switch
} from "react-router-dom";
import {IPost} from "./models/IPost";

const App = () => {

    return (
        <div>

            <Router>
                <Link to={'/'}>home</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>

                <Switch>
                    <Route exact path={'/'}> HOME </Route>
                    <Route path={'/posts'} render={() => <Posts/>}/>

                    {/*<Route path={'/posts:id'} component={PostDetails}/>*/}
                    <Route path={'/posts:id'} render={(props:RouteComponentProps<{}, {}, IPost | any>) => <PostDetails {...props}/>}/>

                </Switch>

            </Router>

        </div>
    );
}

export default App;
