/**
 * Created by owaismushtaq on 09/07/19.
 */
import React, { Component } from 'react';
import Header from 'common'
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
        <div className="container-fluid">
          <Header/>
        </div>
    );
  }
}

export default Dashboard;
