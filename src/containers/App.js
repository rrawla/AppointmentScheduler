import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppointmentList from './AppointmentList';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to Appointment Scheduler</h1>
        </header>
          <div>
              <div className="col-xs-12">
                  <div className="page-header">
                     <h3>Appointments</h3>
                  </div>
                  <div className="row">
                      <AppointmentList/>
                  </div>  
              </div>
          </div>   
      </div>
     </div>
    );
  }
}
export default connect()(App);

