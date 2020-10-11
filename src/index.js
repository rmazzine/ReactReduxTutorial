// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); // Because we override the constructor class by extending, then it must get the parent props

    // This is the only time we do direct assignment
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      // To change state, always use setState!!
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render() {
    // Avoid include run code as this will run all time
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
