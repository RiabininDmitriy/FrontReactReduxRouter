import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from "history/createBrowserHistory";
import About from './components/About'
import AboutPage from './components/AboutPage'
import Form from './components/Form'
import Chat from './components/Chat'
import FormAutContanier from './components/FormAutContanier'
import {AppRouter} from './routes/index'

export let Container = props => <div className={`Contanier ${props.className}`}>
  <Form />
  <Chat />
  <About />
</div>


const history = createHistory();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <AppRouter></AppRouter>
          </Switch>
        </Router>

      </Provider>
    );
  }
}

export default App;
