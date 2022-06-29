import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Sevice/Service';
import Events from './pages/Events/Events';
import Directory from './pages/Directory/Directory';
import Jobs from './pages/Jobs/jobs';
import Navbar from './Components/Navbar/Navbar';
import HomeScreen from './HomeScreen';
import Feedback from './pages/Feedback/Feedback';

const App = () => {
  return (
  <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <HomeScreen/>
        </Route> 
        <Route path="/Home" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/directory" exact>
          <Directory/>
        </Route>
        <Route path="/event" exact>
          <Events/>
        </Route>
        <Route path="/jobs" exact>
          <Jobs/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        {/* <Route path="/contact" exact>
          <Contact/>
        </Route> */}
        <Route path="/feedback" exact>
          <Feedback/>
        </Route>
        <Redirect to="/" /> 
      </Switch>
    </main>
  </Router>
  );
}

export default App;