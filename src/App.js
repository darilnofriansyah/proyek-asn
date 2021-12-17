import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import BaseRouter from './lib/routes';
import CustomLayout from './pages/Layout';
import Home from './pages/home';

class App extends Component {
  render() {
    return(
      <Router>
        <CustomLayout>
          <BaseRouter/>
        </CustomLayout>
      </Router>
    );
  }
}

export default App;
