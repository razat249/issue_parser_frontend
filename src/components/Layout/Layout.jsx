import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IssuesPageContainer from '../IssuesPageContainer/IssuesPageContainer';
import RegionsPageContainer from '../RegionsPageContainer/RegionsPageContainer';

// Use named export for unconnected component (for tests)
export class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Route exact path="/" component={RegionsPageContainer}/>
            <Route path="/issues/:id" component={IssuesPageContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

// Use default export for the connected component (for app)
export default Layout;