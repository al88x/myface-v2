import React from 'react';
import '../style/App.scss';
import {Navbar} from "./Navbar";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {AllPosts} from "./AllPosts";
import {AllUsers} from "./AllUsers";
import {CreatePost} from "./CreatePost";
import {CreateUser} from "./CreateUser";


function App() {
    return (
        <div>
            <header>
                <Router>
                    <div className="nav-bar">
                    <Navbar/>
                        <Switch>
                            <Route
                                path="/posts/create">
                                <CreatePost/>
                            </Route>
                            <Route
                                path="/users/create">
                                <CreateUser/>
                            </Route>
                            <Route path="/posts">
                                <AllPosts />
                            </Route>
                            <Route
                                path="/users/:id?" component={AllUsers}>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
