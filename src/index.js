// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); // Because we override the constructor class by extending, then it must get the parent props

    // This is the only time we do direct assignment
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      // To change state, always use setState!!
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    // Avoid include run code as this will run all time
    return <div>Latitude: {this.state.lat}</div>;
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
