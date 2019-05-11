import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { actionChangeFormFirstName, actionChangePrice } from './actions';

import { Customform, Jsonform } from './components/customform.js';
import Menu from './components/menu.js';
import { RadioGroup } from './components/radio.js';
import Tabs from './components/tabs.js';
import Footer from './components/footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Menu></Menu>
        <Customform
          firstNameVal={this.props.firstname}
          updateFirstName={this.props.actionChangeFormFirstName}></Customform>
        <RadioGroup
          selectedRadioValue="Male"
          models={[
            { 
                id: 'gender-m',
                name: 'gender',
                labeltext: 'Male',
                value: 'Male'
            },
            {   
                id: 'gender-f',
                name: 'gender',
                labeltext: 'Female',
                value: 'Female' 
            }
          ]}></RadioGroup>
        <Jsonform
          models={[
            { errortext: 'Please enter a state',
              key: 'text10',
              id: 'text10', 
              labeltext: 'State', 
              placehodertext: 'State', 
              regexp: '[a-zA-Z]{3,}$',
              type: 'text'
            },
            { errortext: 'Please enter a postcode',
              key: 'text11',
              id: 'text11', 
              labeltext: 'Postcode', 
              placeholdertext: 'Postcode',
              regexp: '[0-9]{4,5}$',
              type: 'text' 
            }
          ]}></Jsonform>
        <Tabs></Tabs>
        <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  firstname: state.customer.firstname,
  prices: state.prices
})

const mapDispatchToProps = (dispatch) => {
  return {
    actionChangeFormFirstName: (val) => { dispatch(actionChangeFormFirstName(val)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
