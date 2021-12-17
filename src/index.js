import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import App from './components/App';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') || document.createElement('div')
)
