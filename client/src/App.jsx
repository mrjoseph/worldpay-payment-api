import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import store, { history } from './redux/store';
import Header from './components/header/header';
import Payments from './views/payments';
import Checkout from './views/checkout/Checkout';
import AuthorizationSuccessful from './views/Authorization-successful';
import './App.css';
import content from './content.json';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="panel panel-default credit-card-box">
              <div className="panel-heading display-table">
                <Header />
                <Route path="/" exact render={() => <Checkout content={content} />} />
                <Route path="/payment" exact render={() => <Payments content={content} />} />
                <Route path="/authorization-successful" exact render={() => <AuthorizationSuccessful content={content} />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
