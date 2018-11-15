import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link } from "react-router-dom";
import store, { history } from './redux/store';
import Header from './components/header/header';
import Payments from './views/payments/Payments'
import Checkout from './views/checkout/Checkout';
import Summary from './views/summary/Summary';

import './App.css';
import content from './content.json';


const Breadcrumb = ({ checkout, payment, summary }) =>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">{checkout}</Link></li>
        <li className="breadcrumb-item"><Link to="payments">{payment}</Link></li>
        <li className="breadcrumb-item active" aria-current="page"><Link to="summary">{summary}</Link></li>
      </ol>
    </nav>;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="panel panel-default credit-card-box">
                  <div className="panel-heading display-table">
                    <Header />
                    <Breadcrumb {...content}/>
                    <Route path="/" exact render={() => <Checkout content={content}/>} />
                    <Route path="/payments" exact render={() => <Payments content={content}/>} />
                    <Route path="/summary" exact render={() => <Summary content={content}/>} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
  );
  }
}

export default App;
