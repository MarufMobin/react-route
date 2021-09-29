import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friend from './components/Friend/Friend';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound'


function App() {

  return (
    <div className="App">
        <Router>
           <Navigation></Navigation>
          <Switch>

              <Route path="/home">
                <Home></Home>
              </Route>
              
            <Route path="/friends">
               <Friends></Friends>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
              <Route exact path="/">
                 <Home></Home>
            </Route>

            
            <Route path="/friend/:frienId">
              <FriendDetails></FriendDetails>
            </Route>

            <Route>
              <NotFound></NotFound>
            </Route>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
