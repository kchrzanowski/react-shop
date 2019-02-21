import React, {Component} from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Menu />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/catalog" component={Catalog} />
                            <Route path="/about" component={About} />
                        </Switch>
                        <Footer/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
