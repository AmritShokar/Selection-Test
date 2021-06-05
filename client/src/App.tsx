import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Collection from './components/Collection';

function App() {

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
      </Router>
    </div>
  );
}

export default App;
