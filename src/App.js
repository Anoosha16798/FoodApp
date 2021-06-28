import logo from './logo.svg';
import './App.css';
import HeaderPage from './components/Header/Header';
import MainPage from './components/Menu/Main';
import StarterPage from './components/Menu/starter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderPage/>
      <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/Menu' component={StarterPage} />
      <Route exact path='/Starter' component={StarterPage} />
      </Switch>
    </div>
  );
}

export default App;
