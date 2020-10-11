// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props); // Because we override the constructor class by extending, then it must get the parent props

    // This is the only time we do direct assignment
    this.state = { lat: null, errorMessage: '' };
  }

  // Same thing to initialize the state
  // state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // To change state, always use setState!!
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept locaiton request" />;
  }

  // React says we have to define render!!
  render() {
    // Avoid include run code as this will run all time
    return <div className="border red">{this.renderContent()}</div>;
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
