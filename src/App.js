
import './App.css';
import Home from './Components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Searchpage from './Components/Searchpage';
function App() {
  return (
    <div className="App">
    <Router>
      <switch>

      
      <Route path="/SearchPage">
           <Searchpage />
          
        </Route>
        <Route exact path="/">
            <Home />
        </Route>




      </switch>


    </Router>
   
    </div>
  );
}

export default App;
