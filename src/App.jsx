
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Destinations from './components/pages/Destinations';
import Home from './components/pages/Home';
import Recreations from './components/pages/Recreations';
import TravelAdvice from './components/pages/TravelAdvice';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/layouts/Main';



function App() {
  
return (
    <div className="App">
      
      <Router>
      <Header />
       
      <Switch>

          <Route exact path='/'>
              <Home />
          </Route>

          <Route exact path='/destinations'>
              <Destinations />
           </Route>

          <Route exact path='/recreations'>
              <Recreations />
          </Route>

          <Route exact path='/advice'>
              <TravelAdvice />
          </Route>

        </Switch>
        
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;

//<div className='card--section'>
 //       {getPlaces.length}
 //       </div>
