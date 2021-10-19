import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home"
import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Header = lazy(() => import('./routes/Home'));
// const Home = lazy(() => import('./routes/About'));


function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
            <Router>
                <Header/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cart" component={Cart}/>

                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
