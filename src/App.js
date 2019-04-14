import React, { Component } from 'react';
// import { Router } from 'react-router';
// import {ConnectedRouter} from 'react-router-redux'
import './App.css';
import { Provider } from 'react-redux'
import store, {history} from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from "history/createBrowserHistory";
import About from './components/About'
import Form from './components/Form'
import Chat from './components/Chat'
import {AppRouter} from './routes/index'

export let Container = props => <div className={`Contanier ${props.className}`}>
  <Form />
  <Chat />
  <About />
</div>




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <AppRouter></AppRouter>
        </Router>
      </Provider>
    );
  }
}

export default App;
