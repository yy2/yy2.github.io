import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import ContactMe from "./ContactMe";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <BrowserRouter> 
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/meetyu" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/works" component={Works} />
                    <Route exact path="/contact" component={ContactMe} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;