import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header/header';
import OrderConfirmation from './views/order-confirmation/order-confirmation'

import './App.css';
import content from './content.json';


const Breadcrumb = ({ orderConfirmationTitle, summary }) =>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">{orderConfirmationTitle}</a></li>
        <li className="breadcrumb-item"><a href="#">{summary}</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="panel panel-default credit-card-box">
                <div className="panel-heading display-table">
                  <Header />
                  <Breadcrumb {...content}/>
                  <Route path="/" exact content={content} render={() => <OrderConfirmation content={content}/>} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
  );
  }
}

export default App;
