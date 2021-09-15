import './App.css';
import Navbar from "./components/general/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import restro from "./restro"

//user components
import Register from "./components/Auth/Register";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div>
          <Provider store={restro}>
            <Router>
              <Route exact path = "/register" component = {Register} />
            </Router>
          </Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
