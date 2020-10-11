import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* The parentesis off will call the function every time the event onChange is called */}
            <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
