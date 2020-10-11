import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID r5jOXIbTah92CtUbLe9IwVorA_9zgWSzMgG7tT-Khps',
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
