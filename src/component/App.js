import React from 'react';
import '../style/App.scss';
import {Navbar} from "./Navbar";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Posts} from "./Posts";
import {Users} from "./Users";

function App() {
    return (
        <div>
            <header>
                <Router>
                    <div className="nav-bar">
                    <Navbar/>
                        <Switch>
                            <Route path="/posts">
                                <Posts />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
