import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AboutPage from '../components/AboutPage'
import { Container } from '../App'
import FormAutContainer from '../components/FormAutContanier/index'

const PrivateRoute = () => {
    return (
        <Switch>
            <Redirect from="/login" to="/" />
            <Route exact path="/" component={Container} />
            <Route path="/about" component={AboutPage} />
        </Switch>)
}

const PublicRoute = () => {
    return (
        <Switch>
            {/* <Redirect from="/" to="/login" /> */}
            <Route exact path="/login" component={FormAutContainer} />
        </Switch>)
}

export const AppRouter = () => {
    return localStorage.getItem('token') ? <PrivateRoute /> : <PublicRoute />;
}
